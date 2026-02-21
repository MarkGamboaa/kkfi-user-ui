/**
 * iSKKOLAR User UI - Sample Data
 * This file contains placeholder data for UI demonstration only.
 * In a real application, this data would come from an API.
 */

const userData = {
  user: {
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juandelacruz@email.com',
    avatar: 'JD',
    role: 'Scholar',
    status: 'Active'
  },
  
  stats: {
    documentsSubmitted: 8,
    pendingReview: 2,
    totalAnnouncements: 5,
    applicationStatus: 'Active'
  },
  
  announcements: [
    {
      id: 1,
      title: 'Scholarship Application Now Open',
      date: 'Feb 6, 2026',
      dateTime: 'Feb 6, 2026, 7:00 AM',
      type: 'announcement',
      excerpt: 'We are pleased to announce that the 2024-2025 Scholarship Application is now officially open. This program is intended to support deserving students who demonstrate academic potential...',
      content: `<p>Dear Students,</p>
        <p>We are pleased to announce that the 2024-2025 Scholarship Application is now officially open. This program is intended to support deserving students who demonstrate academic potential and financial need.</p>
        <h3>Eligibility Requirements</h3>
        <ul>
          <li>Must be a Filipino citizen</li>
          <li>Currently enrolled in an accredited college or university</li>
          <li>Maintaining a general weighted average of at least 85%</li>
          <li>Combined family income does not exceed PHP 300,000 annually</li>
        </ul>
        <h3>Application Process</h3>
        <p>To apply, please complete the online application form and submit all required documents through the iSKKOLAR portal. The deadline for submission is <strong>March 31, 2026</strong>.</p>
        <p>For any questions, please contact the Scholarship Office.</p>
        <p class="signature"><strong>KKFI Scholarship Office</strong><br>scholarship@kkfi.org.ph<br>(02) 8123-4567</p>`,
      author: 'Admin'
    },
    {
      id: 2,
      title: "KKFI Scholars' Orientation and Community Day",
      date: 'Mar 15, 2026',
      dateTime: 'Mar 15, 2026',
      type: 'event',
      excerpt: "The Kapatiran-Kaunlaran Foundation, Inc. (KKFI) invites all scholars to participate in the KKFI Scholars' Orientation and Community Day. This event aims to formally welcome new scholars...",
      content: `<p>Dear Scholars,</p>
        <p>The Kapatiran-Kaunlaran Foundation, Inc. (KKFI) invites all scholars to participate in the KKFI Scholars' Orientation and Community Day.</p>
        <h3>Event Details</h3>
        <ul>
          <li><strong>Date:</strong> March 15, 2026</li>
          <li><strong>Time:</strong> 8:00 AM - 5:00 PM</li>
          <li><strong>Venue:</strong> KKFI Headquarters, Makati City</li>
        </ul>
        <h3>Program Highlights</h3>
        <ul>
          <li>Welcome and introduction of new scholars</li>
          <li>Overview of scholarship benefits and responsibilities</li>
          <li>Community service orientation</li>
          <li>Team building activities</li>
          <li>Lunch and networking</li>
        </ul>
        <p>Attendance is mandatory for all new scholars. Please confirm your attendance through the portal.</p>
        <p class="signature"><strong>KKFI Scholarship Office</strong><br>scholarship@kkfi.org.ph<br>(02) 8123-4567</p>`,
      author: 'Admin'
    },
    {
      id: 3,
      title: 'Annual General Assembly 2026',
      date: 'Apr 20, 2026',
      dateTime: 'Apr 20, 2026',
      type: 'event',
      excerpt: 'All KKFI scholars are required to attend the Annual General Assembly. This is a mandatory event where scholars will receive updates on program policies and meet with foundation officers...',
      content: `<p>Dear Scholars,</p>
        <p>All KKFI scholars are required to attend the Annual General Assembly 2026. This is a mandatory event where scholars will receive updates on program policies and meet with foundation officers.</p>
        <h3>Event Details</h3>
        <ul>
          <li><strong>Date:</strong> April 20, 2026</li>
          <li><strong>Time:</strong> 9:00 AM - 4:00 PM</li>
          <li><strong>Venue:</strong> KKFI Convention Center</li>
        </ul>
        <h3>Agenda</h3>
        <ul>
          <li>Opening remarks by the Foundation President</li>
          <li>Annual report and financial review</li>
          <li>Recognition of outstanding scholars</li>
          <li>Open forum and Q&A session</li>
        </ul>
        <p>Failure to attend may affect your scholarship standing. If you cannot attend, please submit a formal excuse letter at least one week before the event.</p>
        <p class="signature"><strong>KKFI Scholarship Office</strong><br>scholarship@kkfi.org.ph<br>(02) 8123-4567</p>`,
      author: 'Admin'
    },
    {
      id: 4,
      title: 'Grade Submission Deadline Extended',
      date: 'Feb 18, 2026',
      dateTime: 'Feb 18, 2026, 10:30 AM',
      type: 'announcement',
      excerpt: 'The deadline for grade submission has been extended to March 15, 2026. All scholars are required to submit their grades through the portal before the new deadline.',
      content: `<p>Dear Scholars,</p>
        <p>We are pleased to inform you that the deadline for grade submission has been extended.</p>
        <h3>New Deadline</h3>
        <p>The new deadline for submitting all grade reports is <strong>March 15, 2026</strong>. This gives you an additional two weeks to complete your submissions.</p>
        <h3>Required Documents</h3>
        <ul>
          <li>Official Grade Report (certified true copy)</li>
          <li>Certificate of Enrollment for the current semester</li>
        </ul>
        <h3>Submission Guidelines</h3>
        <p>All documents must be submitted through the iSKKOLAR portal. Please ensure that:</p>
        <ul>
          <li>All files are in PDF format</li>
          <li>File size does not exceed 5MB per document</li>
          <li>Documents are clear and readable</li>
        </ul>
        <p>Thank you for your cooperation.</p>
        <p class="signature"><strong>KKFI Scholarship Office</strong><br>scholarship@kkfi.org.ph<br>(02) 8123-4567</p>`,
      author: 'Admin'
    },
    {
      id: 5,
      title: 'Leadership Training Workshop',
      date: 'Feb 28, 2026',
      dateTime: 'Feb 28, 2026',
      type: 'event',
      excerpt: 'A leadership training workshop will be conducted on February 28, 2026. Open to all second-year scholars and above. Register now to reserve your slot.',
      content: `<p>Dear Scholars,</p>
        <p>We are excited to announce a Leadership Training Workshop designed to enhance your leadership skills and prepare you for future career opportunities.</p>
        <h3>Event Details</h3>
        <ul>
          <li><strong>Date:</strong> February 28, 2026</li>
          <li><strong>Time:</strong> 8:00 AM - 5:00 PM</li>
          <li><strong>Venue:</strong> KKFI Training Room</li>
        </ul>
        <h3>What You'll Learn</h3>
        <ul>
          <li>Effective communication skills</li>
          <li>Team management and delegation</li>
          <li>Problem-solving and decision-making</li>
          <li>Public speaking and presentation</li>
        </ul>
        <h3>Eligibility</h3>
        <p>This workshop is open to all second-year scholars and above. Slots are limited, so register early!</p>
        <p>To register, please click the button below or visit the Events section of the portal.</p>
        <p class="signature"><strong>KKFI Scholarship Office</strong><br>scholarship@kkfi.org.ph<br>(02) 8123-4567</p>`,
      author: 'Admin'
    },
    {
      id: 6,
      title: 'Updated Compliance Requirements',
      date: 'Jan 25, 2026',
      dateTime: 'Jan 25, 2026, 9:00 AM',
      type: 'announcement',
      excerpt: 'Please review the updated compliance requirements for the 2026 academic year. New guidelines have been added for community service hours and grade maintenance.',
      content: `<p>Dear Scholars,</p>
        <p>Please be informed of the updated compliance requirements for the 2026 academic year. These changes are effective immediately.</p>
        <h3>Grade Requirements</h3>
        <ul>
          <li>Minimum GWA of 2.5 (or equivalent 80%) must be maintained</li>
          <li>No failing grades in any subject</li>
          <li>Grades must be submitted within 2 weeks of release</li>
        </ul>
        <h3>Community Service Hours</h3>
        <ul>
          <li>Minimum of 24 hours per semester (increased from 20 hours)</li>
          <li>At least 8 hours must be KKFI-organized activities</li>
          <li>Documentation required with photos and sign-off</li>
        </ul>
        <h3>Document Submission</h3>
        <ul>
          <li>All documents must be submitted through the portal</li>
          <li>Maximum file size increased to 10MB</li>
          <li>Accepted formats: PDF, JPG, PNG</li>
        </ul>
        <p>Please review these requirements carefully. Non-compliance may result in suspension of benefits.</p>
        <p class="signature"><strong>KKFI Scholarship Office</strong><br>scholarship@kkfi.org.ph<br>(02) 8123-4567</p>`,
      author: 'Admin'
    }
  ],
  
  documents: [
    { id: 1, name: 'Grades_FirstSem_2025.pdf', date: 'Feb 18, 2026', size: '245 KB', type: 'pdf', status: 'verified' },
    { id: 2, name: 'Community_Service_Photo.jpg', date: 'Feb 15, 2026', size: '1.2 MB', type: 'image', status: 'pending' },
    { id: 3, name: 'Enrollment_Certificate.pdf', date: 'Feb 10, 2026', size: '156 KB', type: 'pdf', status: 'verified' },
    { id: 4, name: 'Birth_Certificate.pdf', date: 'Jan 20, 2026', size: '320 KB', type: 'pdf', status: 'verified' },
    { id: 5, name: 'ID_Photo_2x2.jpg', date: 'Jan 15, 2026', size: '450 KB', type: 'image', status: 'verified' },
    { id: 6, name: 'Service_Hours_Report.pdf', date: 'Feb 19, 2026', size: '180 KB', type: 'pdf', status: 'pending' },
    { id: 7, name: 'Income_Tax_Return.pdf', date: 'Jan 10, 2026', size: '520 KB', type: 'pdf', status: 'verified' },
    { id: 8, name: 'Personal_Essay.docx', date: 'Jan 05, 2026', size: '45 KB', type: 'doc', status: 'verified' }
  ],
  
  applicationProgress: {
    currentStep: 2,
    steps: ['Personal Info', 'Education', 'Family Background', 'Documents', 'Review']
  }
};

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = userData;
}
