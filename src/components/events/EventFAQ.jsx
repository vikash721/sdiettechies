"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const EventFAQ = ({ event }) => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  // Default FAQ items based on event type
  const getDefaultFAQs = () => {
    const commonFAQs = [
      {
        question: "How do I register for this event?",
        answer: "You can register by clicking the 'Join Event' button at the top of this page. Fill in the required information and submit your registration."
      },
      {
        question: "Is there a registration fee?",
        answer: "This event is free to attend for all registered participants. However, some materials or refreshments may be provided based on availability."
      },
      {
        question: "What should I bring to the event?",
        answer: "Please bring a valid ID for verification, a laptop if required for the activities, and any specific materials mentioned in the event guidelines."
      },
      {
        question: "Can I cancel my registration?",
        answer: "Yes, you can cancel your registration up to 24 hours before the event start time. Please contact the event coordinator for cancellation requests."
      }
    ]

    if (event.category === 'Competition') {
      return [
        ...commonFAQs,
        {
          question: "What are the team size requirements?",
          answer: "Team size varies by competition. Please check the specific guidelines section for detailed team formation rules."
        },
        {
          question: "What happens if I win?",
          answer: "Winners will be announced during the closing ceremony and will receive prizes as mentioned in the event details. Certificates will be provided to all participants."
        },
        {
          question: "Are there any restrictions on tools or technologies?",
          answer: "Please refer to the guidelines section for specific tool and technology restrictions. Generally, standard development tools are allowed."
        }
      ]
    }

    if (event.category === 'Workshop' || event.category === 'Technical') {
      return [
        ...commonFAQs,
        {
          question: "Do I need prior experience?",
          answer: "The workshop is designed for participants with basic knowledge. Detailed prerequisites, if any, are mentioned in the event description."
        },
        {
          question: "Will materials be provided?",
          answer: "Basic materials and resources will be provided. Please bring your own laptop for hands-on activities."
        }
      ]
    }

    return commonFAQs
  }

  const faqs = event.faqs || getDefaultFAQs()

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about this event
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      {faq.question}
                    </CardTitle>
                    <div className="flex-shrink-0 ml-4">
                      {openItems.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                {openItems.has(index) && (
                  <CardContent className="pt-0">
                    <div className="ml-11 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Contact for More Questions */}
          <Card className="mt-8 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
            <CardContent className="p-6 text-center">
              <HelpCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                Still Have Questions?
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Can't find the answer you're looking for? Feel free to reach out to our event coordinators.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="#contact"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href={`mailto:${event.contact?.email || 'events@sdiettechies.com'}`}
                  className="px-6 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
                >
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EventFAQ
