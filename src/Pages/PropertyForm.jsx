// src/Pages/PropertyForm.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa"; // Icons for bedrooms, bathrooms, area
import { supabase } from "../Supabase";
import Spinner2 from "../Components/Spinner2";

const PropertyForm = () => {
  const { cityId } = useParams(); // Get property ID from URL (renamed from cityId to propertyId for clarity)
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      action: "",
      message: "",
    },
  });

  // Fetch property details from Supabase based on property ID
  useEffect(() => {
    const fetchProperty = async () => {
      if (!cityId) {
        setError("No property ID provided");
        return;
      }

      const { data, error } = await supabase
        .from("properties")
        .select(
          "id, title, type, price, address, bedrooms, bathrooms, area, image, status, is_featured, description"
        )
        .eq("id", parseInt(cityId))
        .single();

      if (error) {
        setError("Property not found: " + error.message);
      } else if (!data) {
        setError("Property not found");
      } else {
        setProperty(data);
        // Map the property type to 'rent' or 'buy' for the form
        const actionType =
          data.type.toLowerCase() === "villa" ||
          data.type.toLowerCase() === "apartment"
            ? "rent"
            : "buy";
        setValue("action", actionType);
      }
    };

    fetchProperty();
  }, [cityId, setValue]);

  // Handle form submission
  const onSubmit = async (data) => {
    setError(null);
    setSuccess(null);

    const { error } = await supabase.from("property_requests").insert([
      {
        property_id: parseInt(cityId),
        property_name: property.title,
        name: data.name,
        email: data.email,
        phone: data.phone,
        action: data.action,
        message: data.message,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Your request has been submitted successfully!");
      setTimeout(() => navigate("/"), 2000); // Redirect to home after 3 seconds
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return <Spinner2 />;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {property.title}
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          {/* Property Image */}
          <div
            className="h-48 bg-cover bg-center rounded-lg mb-4 relative"
            style={{ backgroundImage: `url(${property.image})` }}
          >
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {property.status}
              </span>
              {property.is_featured && (
                <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Property Details */}
          <p className="text-gray-600 mb-2">{property.address}</p>
          <div className="flex items-center space-x-4 text-gray-600 mb-2">
            <div className="flex items-center">
              <FaBed className="mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <FaRulerCombined className="mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
          <p className="text-gray-800 font-semibold mb-4">
            Price: {property.price}
          </p>

          {/* Property Description */}
          <p className="text-gray-600">{property.description}</p>

          {/* Form */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`mt-1 p-2 w-full border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 p-2 w-full border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9]\d{1,14}$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`mt-1 p-2 w-full border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="action"
                className="block text-sm font-medium text-gray-700"
              >
                Action
              </label>
              <select
                id="action"
                {...register("action", { required: "Please select an action" })}
                className={`mt-1 p-2 w-full border rounded-md focus:ring-yellow-400 focus:border-yellow-400 ${
                  errors.action ? "border-red-500" : ""
                }`}
                disabled
              >
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
              {errors.action && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.action.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                className="mt-1 p-2 w-full border rounded-md focus:ring-yellow-400 focus:border-yellow-400"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-300 text-white py-2 rounded-md hover:bg-yellow-400 transition duration-300"
            >
              {success ? "Submitting Form" : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
