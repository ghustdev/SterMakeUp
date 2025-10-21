// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx', // Replace with your EmailJS service ID
  templateId: 'template_xxxxxxx', // Replace with your EmailJS template ID
  publicKey: 'your_public_key_here', // Replace with your EmailJS public key
}

// EmailJS template parameters
export const createEmailParams = (formData: any) => ({
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone,
  event_date: formData.eventDate,
  service: formData.service,
  message: formData.message,
  to_name: 'SterMakeUp',
})

// EmailJS integration function
export const sendEmail = async (formData: any) => {
  try {
    const emailjs = await import('emailjs-com')
    
    const params = createEmailParams(formData)
    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      params,
      EMAILJS_CONFIG.publicKey
    )
    
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}


