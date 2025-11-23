/**
 * Contact Form Component
 * 
 * Contact form with validation using React Hook Form and Zod.
 * Handles form submission with loading and success/error states.
 * 
 * Features:
 * - Form validation with Zod schema
 * - Real-time error messages
 * - Loading state during submission
 * - Success/error feedback
 * - Smooth animations and transitions
 * - Modern gradient styling
 */

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ============================================================================
// VALIDATION SCHEMA
// ============================================================================

/**
 * Zod schema for form validation
 * Defines validation rules for each field
 */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

// ============================================================================
// COMPONENT
// ============================================================================

export default function ContactForm() {
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  /**
   * Form submission handler
   * Currently simulates API call - replace with actual API endpoint
   */
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      
      setSubmitStatus('success')
      reset() // Clear form on success
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 placeholder:text-gray-400 placeholder:opacity-60"
          placeholder="Your Name"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 placeholder:text-gray-400 placeholder:opacity-60"
          placeholder="your.email@example.com"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Phone Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 placeholder:text-gray-400 placeholder:opacity-60"
          placeholder="+91 9246568474"
        />
        <AnimatePresence>
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {errors.phone.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all duration-300 hover:border-gray-400 placeholder:text-gray-400 placeholder:opacity-60"
          placeholder="Tell us about your project..."
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm mt-1 flex items-center gap-1"
            >
              <AlertCircle size={14} />
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3"
          >
            <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
            <span className="font-medium">Thank you! Your message has been sent successfully.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl text-red-800 flex items-center gap-3"
          >
            <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
            <span className="font-medium">Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </form>
  )
}
