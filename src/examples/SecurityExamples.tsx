/**
 * Security Features Usage Examples
 * 
 * This file demonstrates how to use all the security features
 * implemented in the application.
 */

import { useState } from "react";
import { useRateLimiter } from "@/hooks/useRateLimiter";
import { RateLimitPresets } from "@/utils/rateLimiter";
import { useSessionTimeout } from "@/hooks/useSessionTimeout";
import {
  sanitizeHTML,
  isValidEmail,
  isValidPhone,
  validateInput,
  generateFormToken,
  validateFormToken,
  debounce,
  throttle,
} from "@/utils/security";
import { toast } from "@/hooks/use-toast";

// Example 1: Form with Rate Limiting and Input Validation
export const SecureContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formToken] = useState(generateFormToken());
  
  const { checkLimit } = useRateLimiter(RateLimitPresets.FORM_SUBMISSION);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Check rate limit
    if (!checkLimit()) {
      return;
    }

    // 2. Validate form token
    if (!validateFormToken(formToken)) {
      toast({
        title: "Error",
        description: "Form token expired. Please refresh the page.",
        variant: "destructive",
      });
      return;
    }

    // 3. Validate email
    if (!isValidEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // 4. Validate message
    const validation = validateInput(message, 1000);
    if (!validation.valid) {
      toast({
        title: "Invalid Input",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    // 5. Sanitize HTML content
    const sanitizedMessage = sanitizeHTML(message);

    // 6. Submit form (example)
    console.log("Submitting form:", { email, message: sanitizedMessage });
    toast({
      title: "Success",
      description: "Your message has been sent!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="hidden"
        name="formToken"
        value={formToken}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 border rounded"
          maxLength={1000}
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
        Submit
      </button>
    </form>
  );
};

// Example 2: Search with Debouncing
export const SecureSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce search to prevent too many API calls
  const performSearch = (term: string) => {
    // Validate input first
    const validation = validateInput(term, 100);
    if (!validation.valid) {
      console.error("Invalid search term:", validation.error);
      return;
    }

    // Perform search
    console.log("Searching for:", sanitizeHTML(term));
  };

  const debouncedSearch = debounce(performSearch, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <input
      type="search"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search..."
      className="w-full p-2 border rounded"
    />
  );
};

// Example 3: Scroll Handler with Throttling
export const SecureScrollComponent = () => {
  const handleScroll = () => {
    console.log("Scroll position:", window.scrollY);
    // Perform scroll-related actions
  };

  // Throttle scroll events to improve performance
  const throttledScroll = throttle(handleScroll, 100);

  // Add event listener (in useEffect in real component)
  // window.addEventListener('scroll', throttledScroll);

  return <div>Scroll component</div>;
};

// Example 4: Session Timeout with Warnings
export const ComponentWithSessionTimeout = () => {
  const [showWarning, setShowWarning] = useState(false);

  useSessionTimeout(
    // On timeout
    () => {
      toast({
        title: "Session Expired",
        description: "Your session has expired due to inactivity.",
        variant: "destructive",
      });
      // Optionally redirect to login or clear sensitive data
      console.log("Session timed out - clearing data");
    },
    // On warning (5 minutes before timeout)
    () => {
      setShowWarning(true);
      toast({
        title: "Session Expiring Soon",
        description: "Your session will expire in 5 minutes due to inactivity.",
      });
    }
  );

  return (
    <div>
      {showWarning && (
        <div className="fixed top-4 right-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">
            Your session will expire soon. Move your mouse to extend it.
          </p>
        </div>
      )}
      <div>Your content here</div>
    </div>
  );
};

// Example 5: Phone Number Validation
export const PhoneInputComponent = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setIsValid(isValidPhone(value));
  };

  return (
    <div>
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        className={`w-full p-2 border rounded ${
          isValid ? "border-gray-300" : "border-red-500"
        }`}
      />
      {!isValid && (
        <p className="text-red-500 text-sm mt-1">
          Please enter a valid phone number
        </p>
      )}
    </div>
  );
};

// Example 6: API Call with Rate Limiting
export const SecureAPIComponent = () => {
  const { checkLimit, getRemainingRequests } = useRateLimiter(
    RateLimitPresets.API_CALL
  );

  const makeAPICall = async () => {
    // Check rate limit before making API call
    if (!checkLimit()) {
      return;
    }

    const remaining = getRemainingRequests();
    console.log(`API calls remaining: ${remaining}`);

    try {
      // Make your API call here
      const response = await fetch("/api/endpoint");
      const data = await response.json();
      console.log("API response:", data);
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <button
      onClick={makeAPICall}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Make API Call
    </button>
  );
};

// Example 7: Secure Data Storage
import { secureStorage } from "@/utils/security";

export const SecureStorageExample = () => {
  const saveData = () => {
    secureStorage.setItem("userData", JSON.stringify({
      name: "John Doe",
      preferences: { theme: "dark" }
    }));
    toast({
      title: "Data Saved",
      description: "Your data has been securely stored.",
    });
  };

  const loadData = () => {
    const data = secureStorage.getItem("userData");
    if (data) {
      const parsed = JSON.parse(data);
      console.log("Loaded data:", parsed);
      toast({
        title: "Data Loaded",
        description: `Welcome back, ${parsed.name}!`,
      });
    }
  };

  const clearData = () => {
    secureStorage.removeItem("userData");
    toast({
      title: "Data Cleared",
      description: "Your data has been removed.",
    });
  };

  return (
    <div className="space-x-2">
      <button onClick={saveData} className="px-4 py-2 bg-green-500 text-white rounded">
        Save Data
      </button>
      <button onClick={loadData} className="px-4 py-2 bg-blue-500 text-white rounded">
        Load Data
      </button>
      <button onClick={clearData} className="px-4 py-2 bg-red-500 text-white rounded">
        Clear Data
      </button>
    </div>
  );
};

/**
 * Complete Example: Secure Contact Form with All Features
 */
export const CompleteSecureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formToken] = useState(generateFormToken());
  
  const { checkLimit, isLimited } = useRateLimiter(RateLimitPresets.FORM_SUBMISSION);

  // Debounced validation
  const validateField = debounce((field: string, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "email":
        if (!isValidEmail(value)) {
          newErrors.email = "Invalid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "phone":
        if (!isValidPhone(value)) {
          newErrors.phone = "Invalid phone number";
        } else {
          delete newErrors.phone;
        }
        break;
      case "message": {
        const validation = validateInput(value, 1000);
        if (!validation.valid) {
          newErrors.message = validation.error || "Invalid message";
        } else {
          delete newErrors.message;
        }
        break;
      }
    }

    setErrors(newErrors);
  }, 300);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    if (!checkLimit()) {
      return;
    }

    // Token validation
    if (!validateFormToken(formToken)) {
      toast({
        title: "Security Error",
        description: "Form token expired. Please refresh.",
        variant: "destructive",
      });
      return;
    }

    // Final validation
    if (Object.keys(errors).length > 0) {
      toast({
        title: "Validation Error",
        description: "Please fix all errors before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeHTML(formData.name),
      email: formData.email,
      phone: formData.phone,
      message: sanitizeHTML(formData.message),
    };

    // Submit form
    console.log("Submitting secure form:", sanitizedData);
    
    toast({
      title: "Success!",
      description: "Your message has been sent securely.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <input type="hidden" name="formToken" value={formToken} />
      
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={1000}
          rows={4}
          className={`w-full p-2 border rounded ${
            errors.message ? "border-red-500" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLimited || Object.keys(errors).length > 0}
        className="w-full px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLimited ? "Rate Limited - Please Wait" : "Submit Securely"}
      </button>
    </form>
  );
};
