// Task book: Lieutenant Qualification & Task Book
// Keep every "k" id the same once members have started.
export default {
 "format": "cvfd-taskbook/1",
 "id": "lieutenant-qualification-task-book",
 "title": "Lieutenant Qualification & Task Book",
 "subtitle": "Company Officer · Lieutenant",
 "org": "Community Volunteer Fire Department",
 "description": "Company Officer Lieutenant qualification packet: prerequisites and clearance, policy reference sheet, task performance record, Lt skill evaluations #1–#6 with tactical grade sheets, and ten shift evaluations.",
 "version": "2026-11",
 "nameKey": "ov-name",
 "sections": [
  {
   "id": "ov",
   "label": "Overview",
   "cards": [
    {
     "id": "ov-c1",
     "title": "Cover",
     "blocks": [
      {
       "t": "img",
       "src": "books/shared/cvfd-seal.webp",
       "alt": "CVFD seal",
       "style": "seal"
      },
      {
       "t": "html",
       "html": "<p class=\"kicker\">Community Volunteer Fire Department · Training Division</p><h1 class=\"ctitle\">Company Officer Lieutenant</h1><p class=\"kicker2\">Qualification &amp; Task Book</p>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "ov-name",
         "label": "Candidate",
         "type": "text"
        },
        {
         "k": "ov-f1",
         "label": "Mentor",
         "type": "text"
        },
        {
         "k": "ov-f2",
         "label": "Packet issued",
         "type": "date"
        }
       ]
      }
     ]
    },
    {
     "id": "ov-c2",
     "title": "Program overview",
     "blocks": [
      {
       "t": "html",
       "html": "<h3>How to use this manual</h3><p>This manual is intended to prepare members of this organization to become fire officers. Completing the program lays the foundation for operating in a limited capacity as a fire officer at the Community Volunteer Fire Department, known as Company Officer Lieutenant.</p><p>This program is meant to be conducted in conjunction with the completion of the remaining required certifications, the leadership academy, and other promotion process requirements for the rank of Lieutenant.</p><div class=\"callout\">Completing this program does not ensure automatic eligibility for promotion. Please consult the promotions process for Lieutenant for that information.</div><p>The first step in this program is completing and verifying the eligibility prerequisites. The Training Division Officer and the Battalion Chief complete this step.</p><p>After the process, this manual will be submitted to the Training Division for review. Once the review is complete, an agency certificate will be issued showing that the candidate has successfully completed the program and is eligible to promote.</p><p>Please direct any questions or issues with this program to the Training Division staff.</p><h3>For the fire officer candidate</h3><p>Congratulations on taking the first step toward the officer ranks by initiating this program. This qualification program for the Community Volunteer Fire Department must be completed to work in higher-class fire officer positions. The program prepares you to perform the duties of a Lieutenant.</p><p>Our leadership does not take this commitment lightly. You owe it to yourself and the organization to approach this step in your career with the same sincerity. Officer development demands a deliberate training program, strong oversight, mentorship, comprehensive evaluation of knowledge, skills, and abilities (KSAs), and appropriate documentation. This qualification program is intended to ensure you have the basic KSAs to perform the basic duties of a CVFD Company Officer. Consider the content in these pages the minimum acceptable standard for our Company Officers. CVFD benchmarks are set intentionally high. Remember, becoming an officer at CVFD is a privilege not everyone will earn. There will be opportunities to go far beyond the minimums during your qualification process.</p><p>By completing the qualification packet, you are demonstrating the Job Performance Requirements (JPRs) required for professional fire officers according to NFPA and TCFP.</p><h3>Expected timeline</h3><p>The qualification process is expected to take around 3–6 months, and your progress will be monitored closely by the Training Division and your Battalion Chief.</p>"
      },
      {
       "t": "table",
       "head": [
        "Month",
        "Focus"
       ],
       "rows": [
        [
         "Month 1",
         "Learning, understanding, and knowing policies, procedures, guidelines, and processes."
        ],
        [
         "Month 2",
         "Hands-on application of the skills."
        ],
        [
         "Month 3",
         "Scenario-based training and/or riding in the position of Company Officer while supervised by an actual Company Officer or mentor."
        ]
       ],
       "widths": [
        20,
        80
       ]
      },
      {
       "t": "html",
       "html": "<p>The introductory module contains the foundations of the job. During the qualification process, you will be given a variety of assignments intended to expose you to a wide array of methods for accomplishing our mission.</p><p>The requirements are clearly outlined. Company Officers are all training officers, and the CVFD Training Division relies heavily on Lieutenants to execute company-level training.</p><p>You will find JPR check sheets in this manual. Journaling on these forms may be completed by hand or electronically by you and your supervisor. These logs assist with your personal growth and refresh memories as the packet is reviewed with supervisors. Supervisors must ensure there are check sheets for all required activities and include summary documentation.</p><p>Through this qualification program, the Training Division and your officers aim to create competent and effective company officers. Thank you for stepping up to the challenge. If you need assistance during the process, please get in touch with us.</p><p>— CVFD Training Division</p><h3>Supervising officer introduction</h3><p>This manual serves as a guide to train members of your crew for the next step in their career ladder. You will be asked to share the knowledge you have of the Lieutenant/Captain rank at CVFD, and to spend much of your time molding the future of the Lieutenant/Captain candidate.</p><p>Please take the time to read through the Company Officer Lieutenant Manual. There is an incredible amount of material in the following pages, and each module contains great detail on the tasks assigned to the candidate. Successful completion of this manual will be a lengthy process. Be prepared.</p><p>You will find Mentor Guides in many of the modules, and some modules have more than one. The Mentor Guides are tools for guiding the candidate through each module. Some are more detailed than others; again, they are meant as a guide. It is up to you to evaluate the candidate effectively, and keep in mind that this person will likely be working in your place while you are off.</p><p>It has been said that “Knowledge is Power.” It is in your power to share the vast knowledge you have to help your Company Officer Lieutenant Candidate become the best Company Officer Lieutenant he or she can possibly be.</p><p>Please know you have a support network in the Training Division. You will have access to all the videos, libraries, manuals, training facilities, and more. Let us know how we can help you do your job better, and we will do everything we can to assist you.</p><p>— CVFD Training Division</p>"
      }
     ]
    },
    {
     "id": "ov-c3",
     "title": "Mentor",
     "blocks": [
      {
       "t": "html",
       "html": "<p>You will be assigned a mentor. The purpose of your mentor is to help you further find and develop your leadership style. Your mentor may or may not be in your chain of command. Your mentor will make themselves available as needed. You should not hesitate to contact your mentor for assistance.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "ov-f3",
         "label": "Name of mentor",
         "type": "text"
        },
        {
         "k": "ov-f4",
         "label": "Date assigned",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>For the mentor</h3><p>The goal isn’t to clear the candidate as soon as possible, or as soon as they have completed a performance standard. We ask that you only sign them off on a performance standard once they have shown competency and proficiency in the required skill. Competency and proficiency shall be measured by what we expect a new Company Officer Lieutenant to be able to do and understand, not by what we expect of an experienced promoted company officer.</p><p>Please work with your staffing and Operations to ensure training is as consistent as possible. We expect you to share as much of your knowledge and experience as possible. We also encourage you to challenge your candidate’s knowledge of incident strategy and tactics before they ride in the seat, to ensure they can safely manage the entire incident scene.</p><h3>Task book</h3><p>This Task Book shall be completed before being assessed for designation as a Company Officer Lieutenant. The responsibility for completing all the items listed in this Task Book lies strictly with the member pursuing Company Officer Lieutenant designation. We will not babysit you or manage your time. Accountability is a crucial element for those who aspire to be leaders. If you have problems or difficulties completing the assignments in this Task Book, bring them to your officer’s immediate attention.</p><div class=\"callout\">A Captain or higher-ranking officer shall evaluate all items in this Task Book. Officers shall not sign off on a task until the Company Officer Lieutenant candidate demonstrates a clear understanding and proficiency.</div><p>During your training period, you will complete a minimum of three tactical scenarios. The scenarios will be administered by the Training Division Officer, Company Officer, and Battalion Chief. Once completed, the candidate will have earned the title of Ride-Up Company Officer.</p><h3>Completion</h3><p>Signatures for completion of the tasks should only be given when both the candidate and the mentor feel that the candidate has successfully and competently completed the tasks.</p><p>Once the Task Book is completed, it should be submitted to the Division Chief of Training and the Shift Training Officer, along with emails from the candidate and mentor expressing their approval and readiness for the candidate to perform in the role of Company Officer Lieutenant. The Task Book should be submitted as a professional document, complete with all necessary additional documentation. Following receipt of the Task Book and emails, appropriate notifications will be made to the executive staff.</p><p>If you have questions, concerns, or need further assistance, please do not hesitate to contact the Training Division. <strong>Have fun, learn a lot, and enjoy the experience!</strong></p>"
      }
     ]
    }
   ]
  },
  {
   "id": "qual",
   "label": "Qualifications",
   "cards": [
    {
     "id": "qual-c1",
     "title": "Lieutenant qualifications",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Eligibility prerequisites, completed and verified by the Training Division Officer and the Battalion Chief. Each requirement is complete only when it is dated and signed by a certifying officer. Requirement 1 is met by <strong>one</strong> pathway: Option A or Option B. Attach supporting documentation.</p><h3>Candidate information</h3>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "qual-f1",
         "label": "Name of candidate",
         "type": "name"
        },
        {
         "k": "qual-f2",
         "label": "Date of issue",
         "type": "date"
        },
        {
         "k": "qual-f3",
         "label": "Station / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f4",
         "label": "Authorized by – Training Division",
         "type": "sig"
        },
        {
         "k": "qual-f5",
         "label": "Print name",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f6",
         "label": "Authorized by – Battalion Chief",
         "type": "sig"
        },
        {
         "k": "qual-f7",
         "label": "Print name",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>1 · Officer education (select one pathway)</h3>"
      },
      {
       "t": "choice",
       "k": "qual-ch8",
       "label": "Pathway used",
       "options": [
        "Option A – TCFP / SFFMA Fire Officer I Certification",
        "Option B – CVFD Officer Development Class"
       ],
       "count": true
      },
      {
       "t": "html",
       "html": "<p><strong>Option A – TCFP / SFFMA Fire Officer I Certification.</strong> State certification issued by TCFP or SFFMA. Attach a copy of the certificate.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f9",
         "label": "Certificate no.",
         "type": "text"
        },
        {
         "k": "qual-f10",
         "label": "Date completed",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f11",
         "label": "Certifying officer",
         "type": "sig"
        },
        {
         "k": "qual-f12",
         "label": "Print name",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<p><strong>Option B – CVFD Officer Development Class.</strong> Department course delivered by the CVFD Training Division. Attach the class completion certificate.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f13",
         "label": "Class / cohort",
         "type": "text"
        },
        {
         "k": "qual-f14",
         "label": "Date completed",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f15",
         "label": "Certifying officer",
         "type": "sig"
        },
        {
         "k": "qual-f16",
         "label": "Print name",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>2 · Required certifications (all required)</h3>"
      },
      {
       "t": "grid",
       "k": "qual-g17",
       "cols": [
        {
         "h": "Date completed",
         "type": "date"
        },
        {
         "h": "Certified by",
         "type": "sig"
        },
        {
         "h": "Print name",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "TCFP / SFFMA Instructor I",
         "sub": "Certification"
        },
        {
         "label": "TCFP Incident Safety Officer",
         "sub": "Certification"
        },
        {
         "label": "NIMS ICS-300",
         "sub": "Intermediate ICS for Expanding Incidents"
        }
       ],
       "label": "Requirement",
       "count": 0
      },
      {
       "t": "html",
       "html": "<h3>3 · Experience</h3>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "qual-f18",
         "label": "Years of emergency services experience (greater than)",
         "type": "number"
        }
       ]
      },
      {
       "t": "grid",
       "k": "qual-g19",
       "cols": [
        {
         "h": "Date completed",
         "type": "date"
        },
        {
         "h": "Certified by",
         "type": "sig"
        },
        {
         "h": "Print name",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Emergency services experience",
         "sub": "Greater than the number of years above"
        }
       ],
       "label": "Requirement",
       "count": 0
      },
      {
       "t": "html",
       "html": "<h3>4 · Practical evaluations</h3>"
      },
      {
       "t": "grid",
       "k": "qual-g20",
       "cols": [
        {
         "h": "Date completed",
         "type": "date"
        },
        {
         "h": "Certified by",
         "type": "sig"
        },
        {
         "h": "Print name",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Command Simulation Scenarios",
         "sub": "Tabletop / simulator command scenarios"
        }
       ],
       "label": "Requirement",
       "count": 0
      },
      {
       "t": "html",
       "html": "<p><strong>Final Multi-Company Scenario Evaluation.</strong> Requires both Training Division Officer and Battalion Chief signatures.</p>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "qual-f21",
         "label": "Date completed",
         "type": "date"
        }
       ]
      },
      {
       "t": "choice",
       "k": "qual-ch22",
       "label": "Result",
       "options": [
        "Pass",
        "Fail"
       ],
       "count": true
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f23",
         "label": "Training Division Officer",
         "type": "sig"
        },
        {
         "k": "qual-f24",
         "label": "Print name",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f25",
         "label": "Battalion Chief",
         "type": "sig"
        },
        {
         "k": "qual-f26",
         "label": "Print name",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Supporting documentation checklist</h3><p class=\"hint\">Attach and submit with this packet.</p>"
      },
      {
       "t": "checks",
       "k": "qual-ck27",
       "items": [
        "Fire Officer I certificate (Option A) OR Officer Development Class completion certificate (Option B)",
        "Instructor I certificate",
        "Incident Safety Officer certificate",
        "NIMS ICS-300 certificate",
        "Emergency services experience verification",
        "Command simulation and final multi-company evaluation sheets"
       ],
       "count": true
      }
     ]
    },
    {
     "id": "qual-c2",
     "title": "Ride-up clearance",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"kicker\">Company Officer · Lieutenant</p><h1 class=\"ctitle\">Ride-Up Clearance</h1><p>We do hereby attest that the member known to us as {{name}} has completed the Community Volunteer Fire Department Acting Lieutenant Ride-Up Qualifications in its entirety. We have verified that this curriculum is complete, as indicated by our signatures below. Furthermore, the individual named herein is entitled to all privileges associated with completing this curriculum and qualifications. We attest that this individual has completed all necessary requirements, and we maintain confidence in the member’s ability to function at this level of professional standards.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f28",
         "label": "Training Division Officer",
         "type": "sig",
         "count": true
        },
        {
         "k": "qual-f29",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f30",
         "label": "Battalion Chief",
         "type": "sig",
         "count": true
        },
        {
         "k": "qual-f31",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "qual-f32",
         "label": "Assistant Chief",
         "type": "sig",
         "count": true
        },
        {
         "k": "qual-f33",
         "label": "Date",
         "type": "date"
        }
       ]
      }
     ],
     "submit": true
    }
   ],
   "submit": true
  },
  {
   "id": "ref",
   "label": "Reference",
   "cards": [
    {
     "id": "ref-c1",
     "title": "Lieutenant candidate reference sheet",
     "blocks": [
      {
       "t": "html",
       "html": "<p>The Lieutenant written exam is drawn from the 46 CVFD policies and SOGs listed below. Study each guideline in full. The key points are a starting place, not a substitute for reading the guidelines.</p><div class=\"stats4\"><span><b>100</b>multiple-choice questions</span><span><b>75%</b>required to pass</span><span><b>46</b>policies &amp; SOGs covered</span><span><b>226.02</b>exam authority (policy)</span></div><h3>Administrative policies (100 series) · 11 policies</h3><p class=\"hint\">Conduct, discipline, and how members are treated.</p>"
      },
      {
       "t": "checks",
       "k": "ref-ck1",
       "items": [
        "<strong>102 · Chain of Command</strong> <span class=\"meta\">Rev. 9/20 · 2 pp.</span><br>Rank order from Probationary FF to Fire Chief; handling conflicting orders; when the chain may be broken; who leads when the Fire Chief is absent",
        "<strong>108 · Workplace Harassment</strong> <span class=\"meta\">Rev. 12/20 · 4 pp.</span><br>Types of harassment; formal complaint to HR; 10-day written response; remedial action; retaliation, confidentiality, false complaints",
        "<strong>109 · Workplace Violence</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>What counts as violence; report to your direct supervisor; supervisor actions; Assistant Chief investigation",
        "<strong>115 · Grievances</strong> <span class=\"meta\">Rev. 12/20 · 2 pp.</span><br>Definition; management rights; informal resolution first; 15-day filing window; 10-day reply; appeal to the Fire Chief",
        "<strong>116 · Rules and Regulations</strong> <span class=\"meta\">Rev. 4/18 · 5 pp.</span><br>Personal conduct; insubordination; disclosure of information; records; care of property; absence; neglect of duty; endorsements and solicitation",
        "<strong>120 · Uniform Dress Code</strong> <span class=\"meta\">Rev. 9/20 · 6 pp.</span><br>Uniform classes A through D; rank insignia and dress coat striping; badges, name plates, commendations; grooming standards",
        "<strong>121 · Social Media Use</strong> <span class=\"meta\">Rev. 12/25 · 2 pp.</span><br>No personal devices for scene imagery; helmet cameras; images belong to CVFD; representing the department; TikTok ban on department devices",
        "<strong>122 · Computer Use</strong> <span class=\"meta\">Rev. 4/18 · 4 pp.</span><br>Ownership and monitoring; personal devices on the network; password security; prohibited activities; enforcement",
        "<strong>123 · Progressive Discipline</strong> <span class=\"meta\">Rev. 8/23 · 3 pp.</span><br>Disciplinary authority by rank; counseling, written action, 2nd and 3rd occurrences in 12 months; probationary limits; formal complaints; appeals",
        "<strong>128 · Working With Minors</strong> <span class=\"meta\">Rev. 1/24 · 6 pp.</span><br>Never alone with a minor; no fraternization or off-hours contact; appropriate and inappropriate contact; mandated reporting (9-1-1 or CPS within 48 hours)",
        "<strong>133 · Professional Conduct and Communication Standards (Academy and Instructional Staff)</strong> <span class=\"meta\">Rev. 12/25 · 2 pp.</span><br>No social media contact with current or prospective students; approved communication channels; outside visitation; disclosures to the Assistant Fire Chief"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Operations policies (200 series) · 9 policies</h3><p class=\"hint\">Response standards, staffing, communications, and the daily duties a Lieutenant manages.</p>"
      },
      {
       "t": "checks",
       "k": "ref-ck2",
       "items": [
        "<strong>201 · Standard of Response</strong> <span class=\"meta\">Rev. 10/26 · 2 pp.</span><br>NFPA 1710 targets (4 and 8 minutes); processing, turnout, and travel time; 1:30 turnout standard; staying in the response territory",
        "<strong>202 · Daily Staffing</strong> <span class=\"meta\">Rev. 9/20 · 2 pp.</span><br>Shift Commander succession; staffing report deadline; minimum engine, aerial, and ambulance staffing; driver licensing; booster trucks; special operations clearance",
        "<strong>208 · Radio Communications</strong> <span class=\"meta\">Rev. 11/20 · 6 pp.</span><br>Radio etiquette; “Me to You” format; standard terms; phonetic alphabet; Emergency Traffic, 99 Bravo, and Mayday; officer radio numbers; channel use",
        "<strong>210 · Mutual Aid</strong> <span class=\"meta\">Rev. 4/18 · 1 pp.</span><br>Giving aid at the Assistant Chief’s discretion; staffing specialized units; Shift Commander escort; requesting aid through dispatch",
        "<strong>216 · Helicopter Landing Zone</strong> <span class=\"meta\">Rev. 4/18 · 4 pp.</span><br>LZ size, slope, and distance; marking the LZ; LZ Commander duties; MA-2 radio; ABORT procedure; night operations; hazmat LZ placement",
        "<strong>224 · After Action Review</strong> <span class=\"meta\">Rev. 9/20 · 4 pp.</span><br>Informal vs. formal AARs; who requests and who leads them; one-month deadline; FEMA USFA TR 159; contents of the summary report",
        "<strong>225 · Required Testing and Maintenance</strong> <span class=\"meta\">Rev. 11/20 · 2 pp.</span><br>Hose test pressures; tagging and rolling damaged hose; hydrant inspection and 5-year flow tests; pump testing; aerial and ground ladder testing",
        "<strong>226 · Suppression Training Program</strong> <span class=\"meta\">Rev. 8/23 · 2 pp.</span><br>Position Qualification Workbook and 75% exam; promotion approval; annual ISO training hours; external training requests; officer and driver development",
        "<strong>227 · Shift Responsibilities</strong> <span class=\"meta\">Rev. 8/23 · 5 pp.</span><br>Shift Commander, Company Officer, Engineer, and Firefighter duties; 6:30 manpower report; PSTrax and FireRescue1; forecasting staffing; Monday and Sunday duties"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Standard operating guidelines (300 series) · 26 SOGs</h3><p class=\"hint\">Fireground command, crew safety, and special incidents. Half of the exam questions come from this series.</p>"
      },
      {
       "t": "checks",
       "k": "ref-ck3",
       "items": [
        "<strong>301 · Incident Command</strong> <span class=\"meta\">Rev. 9/20 · 6 pp.</span><br>Command responsibilities and functions; tactical priorities and benchmarks; modes of operation; size-up and 360 report; Mobile Command; transfer of command; divisions and groups; building sides",
        "<strong>302 · Risk Management</strong> <span class=\"meta\">Rev. 9/20 · 9 pp.</span><br>Risk management plan; tactical positioning; hot, warm, and cold zones; Safety Division; collapse indicators and the 10–15 minute evaluation; evacuation and PAR; high-rise safety",
        "<strong>303 · Structure Fire Incidents</strong> <span class=\"meta\">Rev. 4/18 · 8 pp.</span><br>Offensive and defensive strategy; 360 building assessment; resetting the fire; marginal situations; door control; 30-second air horn; 750 GPM master streams; company assignments",
        "<strong>304 · High-Rise Incidents</strong> <span class=\"meta\">Rev. 4/18 · 4 pp.</span><br>High-rise definition; Lobby Control; first, second, and third engine duties; aerial placement; RIT on the floor below; spare air cylinders; evacuation and defend in place",
        "<strong>305 · Water Supply</strong> <span class=\"meta\">Rev. 9/20 · 3 pp.</span><br>Hydrant supply on working fires; 10 psi intake residual; attack line selection and GPM; hoseline placement; FDC and standpipe operations",
        "<strong>306 · iRIT</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>2 in / 2 out (OSHA 29 CFR 1910.134); iRIT roles; the four-firefighter rule; exceptions for life hazard and incipient fires",
        "<strong>307 · Rapid Intervention</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>RIT at all working structure fires; RIT tasks while staged; IC actions on a Mayday; never self-deploy; second RIT and additional alarm",
        "<strong>308 · Mayday Readiness and Response</strong> <span class=\"meta\">Rev. 8/23 · 3 pp.</span><br>30-second Mayday rule; firefighter readiness; B.O.A.; survival actions; Who/Where/What/Why report; Division Officer role; “Mayday resolved” benchmark",
        "<strong>309 · Structural Search and Rescue</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>Search plan; primary vs. secondary search; stages of fire development; VEIS",
        "<strong>310 · Accountability</strong> <span class=\"meta\">Rev. 9/20 · 2 pp.</span><br>SEMS II electronic accountability; Accountability Officer; when a PAR is required; responding to PASS alarms",
        "<strong>311 · Air Management</strong> <span class=\"meta\">Rev. 8/23 · 4 pp.</span><br>ROAM; 33% emergency reserve; exit at 50% on small structures; R.E.A.D.Y. check; work cycles; air emergencies; 150-foot maximum interior distance",
        "<strong>312 · Loss Control</strong> <span class=\"meta\">Rev. 4/18 · 4 pp.</span><br>Salvage priorities and methods; overhaul objectives; cellulose insulation; evidence preservation; air monitoring before removing SCBA",
        "<strong>313 · Ventilation Operations</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>Positive and negative pressure ventilation; fan placement; vertical ventilation safety; hole sizes for residential and commercial roofs",
        "<strong>314 · Rehabilitation</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>IC responsibilities; rehab location; hydration; two-bottle rule and 10-minute minimum; vital-sign thresholds; rehab accountability",
        "<strong>315 · Automatic Fire Alarms</strong> <span class=\"meta\">Rev. 4/18 · 1 pp.</span><br>Annunciator panel; resetting the system; when to contact the alarm company; forcible entry decision; releasing the scene",
        "<strong>316 · Motor Vehicle Fires</strong> <span class=\"meta\">Rev. 4/18 · 3 pp.</span><br>Apparatus placement; minimum 1¾” line; first water; LPG/LNG tanks; bumpers, batteries, combustible metals, fuel tanks, and other hazards",
        "<strong>317 · Aircraft Emergencies</strong> <span class=\"meta\">Rev. 4/18 · 3 pp.</span><br>FAA Alert 1, 2, and 3; requesting ARFF, HazMat, and NTSB; 20-foot foam escape path; fuselage protection; interior attack and ventilation",
        "<strong>318 · Hazardous Materials Response</strong> <span class=\"meta\">Rev. 4/18 · 4 pp.</span><br>Single-engine vs. full HazMat response; First Response defensive posture; approach uphill and upwind; hot, warm, and cold zones; identification sources",
        "<strong>319 · Flammable Liquid Emergencies</strong> <span class=\"meta\">Rev. 12/18 · 1 pp.</span><br>25-gallon threshold; hazmat response assignment; protecting drains; controlling ignition sources; small spill procedures",
        "<strong>320 · Natural and LP Gas</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>Gas properties and flammable ranges; do not extinguish burning gas; parking 200 feet upwind; leak procedures; explosions",
        "<strong>321 · Carbon Monoxide Response</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>CO exposure levels; investigation procedure; actions at 0–10, 10–35, 35–100, and 100+ PPM; disposition",
        "<strong>322 · Technical Rescue</strong> <span class=\"meta\">Rev. 4/18 · 1 pp.</span><br>What counts as technical rescue; vehicle extrication; water rescue order: Reach, Throw, Row, Go, Helo",
        "<strong>323 · Wires Down Response</strong> <span class=\"meta\">Rev. 4/18 · 1 pp.</span><br>Isolate and deny entry; never touch or cut wires; no rescue until the utility clears the hazard; fires near wires; storm response",
        "<strong>324 · Bomb Threat</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>Staging and liaison with law enforcement; no radios or phones within 300 feet; no searching; secondary devices; defensive tactics",
        "<strong>325 · Clandestine Drug Labs</strong> <span class=\"meta\">Rev. 4/18 · 2 pp.</span><br>CVFD’s support role; hazards and booby traps; lab indicators; withdraw and notify; no entry into unsecured labs; exposure procedures",
        "<strong>326 · Electric Vehicles</strong> <span class=\"meta\">Rev. 8/23 · 3 pp.</span><br>Recognizing EVs; thermal runaway signs; operations with a trapped patient; let it burn (with exceptions); water needs; ESA hotline 1-855-ESA-SAFE"
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "task",
   "label": "Task record",
   "cards": [
    {
     "id": "task-c1",
     "title": "Task performance record",
     "blocks": [
      {
       "t": "html",
       "html": "<p>For each performance, mark <strong>O</strong> if it was performed on a call for service or <strong>T</strong> if it was performed in a training environment, then the evaluating officer initials it. <strong>Req.</strong> is the number of performances required.</p>"
      },
      {
       "t": "reps",
       "head": "Task",
       "max": 11,
       "items": [
        {
         "k": "task-rp1",
         "html": "Perform an initial scene size-up",
         "req": 11
        },
        {
         "k": "task-rp2",
         "html": "Perform a 360-degree size-up and follow-up report",
         "req": 11
        },
        {
         "k": "task-rp3",
         "html": "Formulate an Incident Action Plan for an incident",
         "req": 11
        },
        {
         "k": "task-rp4",
         "html": "Utilize the MDT to respond to calls, view notes, and update status",
         "req": 11
        },
        {
         "k": "task-rp5",
         "html": "Act as the first-arriving IC and assign the first three crews arriving",
         "req": 3
        },
        {
         "k": "task-rp6",
         "html": "Conduct an IC pass-off to an incoming District Chief",
         "req": 5
        },
        {
         "k": "task-rp7",
         "html": "Direct and supervise victim extrication of an MVA with entrapment",
         "req": 3
        },
        {
         "k": "task-rp8",
         "html": "Direct and supervise the extinguishment of a car fire",
         "req": 3
        },
        {
         "k": "task-rp9",
         "html": "Direct and supervise search and rescue of a structure fire",
         "req": 5
        },
        {
         "k": "task-rp10",
         "html": "Direct and supervise vertical ventilation of a structure",
         "req": 3
        },
        {
         "k": "task-rp11",
         "html": "Direct and supervise horizontal P.P.V. of a structure",
         "req": 4
        },
        {
         "k": "task-rp12",
         "html": "Direct and supervise resuscitation efforts of a patient in cardiac arrest",
         "req": 4
        },
        {
         "k": "task-rp13",
         "html": "Direct and supervise wildland suppression activities",
         "req": 3
        },
        {
         "k": "task-rp14",
         "html": "Direct and supervise various technical rescue operations (according to ability)",
         "req": 3
        },
        {
         "k": "task-rp15",
         "html": "Correctly enter a run report",
         "req": 11
        },
        {
         "k": "task-rp16",
         "html": "Correctly enter a training report",
         "req": 11
        },
        {
         "k": "task-rp17",
         "html": "Direct and supervise a crew training exercise",
         "req": 11
        },
        {
         "k": "task-rp18",
         "html": "Correctly conduct a public relations event",
         "req": 2
        },
        {
         "k": "task-rp19",
         "html": "Correctly conduct a First Report of Injury and identify when it is necessary",
         "req": 3
        },
        {
         "k": "task-rp20",
         "html": "Correctly direct your crew to perform a forward lay with fire attack",
         "req": 4
        },
        {
         "k": "task-rp21",
         "html": "Correctly conduct a RIT operation with rescue",
         "req": 4
        },
        {
         "k": "task-rp22",
         "html": "Direct and mitigate a commercial fire alarm",
         "req": 5
        },
        {
         "k": "task-rp23",
         "html": "Direct and mitigate a Haz-Mat scenario",
         "req": 4
        },
        {
         "k": "task-rp24",
         "html": "Direct and mitigate a gas leak",
         "req": 5
        },
        {
         "k": "task-rp25",
         "html": "Direct and complete a pre-fire plan",
         "req": 5
        },
        {
         "k": "task-rp26",
         "html": "Complete an annual employee evaluation",
         "req": 2
        }
       ]
      },
      {
       "t": "html",
       "html": "<ul><li>All radio communications should use the Blue Card Command communications format.</li><li>Indicate whether each performance was conducted in training or observed on a response.</li><li>Count only effective performances. Ineffective performances do not count toward completion.</li></ul>"
      }
     ]
    }
   ],
   "submit": true
  },
  {
   "id": "skills",
   "label": "Skill evaluations",
   "cards": [
    {
     "id": "skills-c1",
     "title": "Skill evaluation summary",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Each skill is evaluated on its own sheet against NFPA 1021 (2020 edition). Every task step is scored Pass/Fail; a retest column is provided on each sheet. Record each skill here once it is passed.</p>"
      },
      {
       "t": "grid",
       "k": "skills-g1",
       "cols": [
        {
         "h": "NFPA 1021",
         "type": "label"
        },
        {
         "h": "Date passed",
         "type": "date"
        },
        {
         "h": "Evaluator",
         "type": "sig"
        }
       ],
       "rows": [
        {
         "label": "1 · Recommending Action for Member-Related Problems",
         "sub": "4.2.4"
        },
        {
         "label": "2 · Developing & Implementing Action Plans and Assigning Tasks",
         "sub": "4.1.2, 4.2.1, 4.6.1, 4.6.2"
        },
        {
         "label": "3 · Conducting an Informal Post-Incident Analysis",
         "sub": "4.6.3"
        },
        {
         "label": "4 · Conducting & Directing Company-Level Training",
         "sub": "4.2.3, 4.7.1"
        },
        {
         "label": "5 · Entering Incident Reports / Training Reports",
         "sub": "4.1.2, 4.4.4, 4.4.5"
        },
        {
         "label": "6 · Tactical Scenarios (minimum of three)",
         "sub": "—"
        }
       ],
       "label": "Skill",
       "count": 1
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Skill evaluators must be a Captain or higher-ranking officer. Do not sign a skill until the candidate demonstrates clear understanding and proficiency.</div>"
      }
     ]
    },
    {
     "id": "skills-c2",
     "title": "Lt Skill #1 – Recommending Action for Member-Related Problems",
     "blocks": [
      {
       "t": "ps",
       "k": "skills-ps2",
       "desc": [
        "<strong>Objective:</strong> Section 901 Fire Officer I. Recommend action for member-related problems, given a member with a situation requiring assistance and the member assistance policies and procedures, so that the situation is identified and the actions taken are within the established policies and procedures. (4.2.4)",
        "<strong>Instructions:</strong> Using the policies and procedures provided, the Fire Officer I candidate shall demonstrate the proper method of applying human resources policies and procedures, so that the situation is identified and the actions recommended are within the established policies and procedures."
       ],
       "chips": [
        [
         "NFPA 1021, 2020 ed.",
         "4.2.4"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Recommend action for member-related problems, given a member with a situation requiring assistance and the member assistance policies and procedures, so that the situation is identified and the actions taken are within the established policies and procedures."
        },
        {
         "t": "step",
         "html": "Identified the correct policy addressing the issue"
        },
        {
         "t": "step",
         "html": "Correctly followed the policy process to resolve the issue"
        },
        {
         "t": "step",
         "html": "Recommended appropriate coaching, counseling, disciplinary, or other action(s), if justified"
        },
        {
         "t": "step",
         "html": "Identified actions to be taken if the situation is not corrected or recurs"
        },
        {
         "t": "step",
         "html": "Followed up to ensure understanding"
        },
        {
         "t": "step",
         "html": "Applied actions fairly, firmly, and equally"
        },
        {
         "t": "step",
         "html": "Related interpersonally"
        },
        {
         "t": "step",
         "html": "Referred member to the Employee Assistance Program, if the situation warrants"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c3",
     "title": "Lt Skill #2 – Developing & Implementing Action Plans and Assigning Tasks or Responsibilities to Company Members",
     "blocks": [
      {
       "t": "ps",
       "k": "skills-ps3",
       "desc": [
        "<strong>Objective:</strong> Section 901. Demonstrate the ability to effectively communicate in writing utilizing technology provided by the AHJ; write reports, letters, and memos; operate in an information management system; and effectively operate at all levels in the incident management system utilized by the AHJ. (4.1.2) Assign tasks or responsibilities to unit members, given an assignment at an emergency incident, so that the instructions are complete, clear, and concise; safety considerations are addressed; and the desired outcomes are conveyed. (4.2.1) Develop an initial action plan, given size-up information for an incident and assigned emergency response resources, so that resources are deployed to control the emergency. (4.6.1) Implement an action plan at an emergency operation, given assigned resources, type of incident, and a preliminary plan, so that resources are deployed to mitigate the situation. (4.6.2)",
        "<strong>Instructions:</strong> Using the policies and procedures provided, the Ride-Up Officer candidate shall develop an initial action plan from the given size-up and assigned resources information, so that resources are deployed to control the emergency."
       ],
       "chips": [
        [
         "NFPA 1021, 2020 ed.",
         "4.1.2, 4.2.1, 4.6.1, 4.6.2"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Demonstrates each JPR stated in the objective above: written communication and information management (4.1.2); assigning tasks or responsibilities to unit members (4.2.1); developing an initial action plan (4.6.1); and implementing an action plan at an emergency operation (4.6.2)."
        },
        {
         "t": "step",
         "html": "Developed an initial action plan that adequately addresses size-up information"
        },
        {
         "t": "step",
         "html": "Developed an initial action plan that will adequately deploy assigned resources"
        },
        {
         "t": "step",
         "html": "Followed standard operating procedures while delivering concise instructions for frequently assigned unit tasks"
        },
        {
         "t": "step",
         "html": "Delivered instructions that were complete, clear, and concise"
        },
        {
         "t": "step",
         "html": "Addressed safety considerations"
        },
        {
         "t": "step",
         "html": "Supervised the incident utilizing an incident management system and maintained accountability of personnel"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c4",
     "title": "Lt Skill #3 – Conducting an Informal Post-Incident Analysis",
     "blocks": [
      {
       "t": "ps",
       "k": "skills-ps4",
       "desc": [
        "<strong>Objective:</strong> Section 901. Develop and conduct a post-incident analysis, given a single-unit incident and post-incident analysis policies, procedures, and forms, so that all required critical elements are identified and communicated, and the approved forms are completed and processed in accordance with policies and procedures. (4.6.3)",
        "<strong>Instructions:</strong> The Ride-Up Officer candidate will be provided with a single-unit emergency incident scenario/training, associated forms, and reports from the emergency incident. The candidate shall use the provided information, following departmental or agency policies and procedures, to develop a single-unit post-incident analysis. All key components of the post-incident analysis must be appropriately addressed. The candidate shall first develop a written post-incident analysis report and then present the findings to the examiner in a verbal report."
       ],
       "chips": [
        [
         "NFPA 1021, 2020 ed.",
         "4.6.3"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Develop and conduct a post-incident analysis, given a single-unit incident and post-incident analysis policies, procedures, and forms, so that all required critical elements are identified and communicated, and the approved forms are completed and processed in accordance with policies and procedures. (4.6.3)"
        },
        {
         "t": "step",
         "html": "Developed a written post-incident analysis that addressed the critical elements"
        },
        {
         "t": "step",
         "html": "Evaluated overall skill performance of the unit during the incident"
        },
        {
         "t": "step",
         "html": "Completed approved forms"
        },
        {
         "t": "step",
         "html": "Verbally communicated the findings in an informal setting to the crew/crews involved in the scenario"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c5",
     "title": "Lt Skill #4 – Assignment and completion requirements",
     "blocks": [
      {
       "t": "html",
       "html": "<p>The assigned officer or Training Division assigns all five EO skills and all five probationary skills listed in the Assigned Skill Bank. The candidate does not select the skills. The officer sets the order, training dates, apparatus, and scenario conditions.</p><div class=\"callout\">Four of the ten skills must be successfully completed before Skill #4 is signed off. Skills may be evaluated on the same day or over multiple supervised company-training sessions.</div><ul><li>For each assignment, use the complete performance sheet from the identified source book. Its task steps, equipment, conditions, time limits, and pass/fail requirements govern the practical demonstration. The Skill Bank descriptions are summaries, not replacement checklists.</li><li>The candidate must demonstrate the skill, explain its purpose and safety requirements, direct company members, evaluate at least one member’s demonstration using the source checklist, and document results and follow-up.</li><li>Include an evaluator-provided simulated injury or exposure in at least one session. Identify the hazard, apply the appropriate policy, communicate preventive actions, and complete the required simulated reporting.</li><li>The supervising evaluator must directly observe and verify the candidate’s demonstration, instruction, and checklist accuracy. Stop unsafe actions and document remediation before reassessment.</li></ul><p><strong>Sign-off authority.</strong> Candidate-completed checklists demonstrate evaluation ability only. A ride-up candidate may not independently authorize EO qualification sign-offs. Any official member task-book sign-off must be verified and signed by personnel authorized under that source book. Final Skill #4 approval is completed by the authorized supervising evaluator.</p><h3>Assigned Skill Bank</h3>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "skills-f5",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "skills-f6",
         "label": "Assigned by",
         "type": "text"
        }
       ]
      },
      {
       "t": "grid",
       "k": "skills-g7",
       "cols": [
        {
         "h": "Done",
         "type": "check"
        },
        {
         "h": "Date",
         "type": "date"
        },
        {
         "h": "Initials",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "EO-1 · Pumper Skill #1 — Preventative Maintenance, Weekly/Daily",
         "sub": "EO Book, PDF pp. 20–21. Perform assigned daily/weekly inspections; identify deficiencies and document findings on the department inspection form."
        },
        {
         "label": "EO-2 · Pumper Skill #6 — Pump Relay Operations",
         "sub": "EO Book, PDF p. 28. Establish relay pumping, operate pressure controls, transfer water sources, and provide required pressure/flow while maintaining safe residual pressure."
        },
        {
         "label": "EO-3 · Pumper Skill #7 — Basic Fire Engine Operations",
         "sub": "EO Book, PDF p. 29. Conduct the walk-around and start-up checks, verify warning systems, engage and check the pump, restore readiness, and refill the tank."
        },
        {
         "label": "EO-4 · Pumper Skill #10 — Producing a Foam Fire Stream/CAFS",
         "sub": "EO Book, PDF p. 32. Engage the pump and foam/CAFS systems, select the correct discharge and foam proportion, and verify operating pressures."
        },
        {
         "label": "EO-5 · Pumper Skill #12 — Supplying a Sprinkler System or Standpipe with 3-inch Line (FDC)",
         "sub": "EO Book, PDF pp. 34–35. Establish an FDC supply, maintain the source-sheet pressures during water-source transfer, refill the tank, and identify low-residual-pressure concerns."
        },
        {
         "label": "PB-1 · Phase 1, PS #02 — Checking SCBA and PASS",
         "sub": "Probationary Phase Book. Inspect the SCBA, verify gauges/HUD, check regulator and alarms, demonstrate accountability alerts, and reset the unit."
        },
        {
         "label": "PB-2 · Phase 1, PS #04 — Mayday Procedures",
         "sub": "Probationary Phase Book. Demonstrate the prescribed Mayday sequence, emergency radio functions, location/situation reporting, PASS activation, and survival actions."
        },
        {
         "label": "PB-3 · Phase 2, PS #05 — Attack Line Deployment",
         "sub": "Probationary Phase Book. Deploy the 200-foot, 1.75-inch attack line, remove entanglements, charge/purge it, set the directed pattern, and maintain nozzle control within the source time limit."
        },
        {
         "label": "PB-4 · Phase 2, PS #06 — Hydrant Connection",
         "sub": "Probationary Phase Book. Gather tools, deploy the 5-inch supply line, flush/connect the hydrant, charge on the engineer’s signal, remove kinks, and report within the source time limit."
        },
        {
         "label": "PB-5 · Phase 3, PS #11 — Ladder Carry and Raise",
         "sub": "Probationary Phase Book. Carry and raise the 35-foot ground ladder, check overhead hazards, secure pawls/halyard, set the climbing angle, and explain placement for roof, ventilation, and rescue."
        }
       ],
       "label": "Source skill / demonstration focus",
       "count": 0
      },
      {
       "t": "html",
       "html": "<p class=\"hint\"><strong>Safety / conditions:</strong> Follow source-sheet PPE, staffing, equipment, location, and timing requirements. Mayday practice uses the training channels specified in the phase book. Conduct evolutions under current department procedures and applicable apparatus operating instructions.</p>"
      }
     ]
    },
    {
     "id": "skills-c6",
     "title": "Lt Skill #4 – Conducting & Directing Company-Level Training",
     "blocks": [
      {
       "t": "ps",
       "k": "skills-ps8",
       "desc": [
        "<strong>Objective:</strong> Given assigned skills from the updated EO Book and Probationary Phase Book, current department policies, the applicable source performance sheets, apparatus, equipment, and a company, the lieutenant candidate shall personally demonstrate each assigned skill to its source performance standard; prepare and direct safe company-level training; observe a member performing the skill; accurately check off each performance step and determine pass/fail; provide corrective coaching; and complete the required training documentation under the assigned officer’s supervision."
       ],
       "chips": [
        [
         "NFPA 1021, 2020 ed.",
         "4.2.3, 4.7.1"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Obtains the assigned source sheet and explains the complete objective, task steps, equipment, conditions, and time limit."
        },
        {
         "t": "step",
         "html": "Prepares the lesson / evolution plan, company assignments, equipment, and performance assessment sheet."
        },
        {
         "t": "step",
         "html": "Identifies hazards, briefs PPE and safety controls, and communicates stop-work and emergency procedures."
        },
        {
         "t": "step",
         "html": "Personally demonstrates all required source-sheet task steps safely and meets the stated performance and timing requirements."
        },
        {
         "t": "step",
         "html": "Explains the purpose, sequence, expected outcomes, and common errors clearly to company members."
        },
        {
         "t": "step",
         "html": "Assigns member roles and directs a hands-on evolution with clear instructions and appropriate supervision."
        },
        {
         "t": "step",
         "html": "Monitors safety and corrects unsafe or ineffective actions immediately while following CVFD policies and guidelines."
        },
        {
         "t": "step",
         "html": "Observes at least one member’s complete performance; checks off only steps actually observed on the source performance sheet."
        },
        {
         "t": "step",
         "html": "Accurately records each step and the pass/fail result; identifies unmet requirements without awarding unsupported completion."
        },
        {
         "t": "step",
         "html": "Provides specific feedback, corrective coaching, and a documented recheck plan for any unmet requirements."
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c7",
     "title": "Lt Skill #5 – Entering Incident Reports / Training Reports",
     "blocks": [
      {
       "t": "ps",
       "k": "skills-ps9",
       "desc": [
        "<strong>Objective:</strong> The ability to effectively communicate in writing utilizing technology provided by the AHJ; write reports, letters, and memos; operate in an information management system; and effectively operate at all levels in the incident management system utilized by the AHJ. (4.1.2) Explain the purpose of each management component of the organization, given an organization chart, so that the explanation is current and accurate and clearly identifies the purpose and mission of the organization. (4.4.4) Explain the needs and benefits of collecting incident response data, given the goals and mission of the organization, so that incident response reports are timely and accurate. (4.4.5)",
        "<strong>Instructions:</strong> The Ride-Up Officer candidate will be provided with an organization chart and the goals and mission of the organization. The candidate will explain the purpose of each management component of the organization and the needs and benefits of collecting incident response data, utilizing AHJ information management system data."
       ],
       "chips": [
        [
         "NFPA 1021, 2020 ed.",
         "4.1.2, 4.4.4, 4.4.5"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Complete an ESO run report (fire response)"
        },
        {
         "t": "step",
         "html": "Complete a FireRescue1 training report"
        },
        {
         "t": "step",
         "html": "Explain the procedure for reporting an apparatus/equipment problem (PSTrax)"
        },
        {
         "t": "step",
         "html": "Candidate communicated the purpose and intent of hands-on training with a lesson plan and performance assessment sheet"
        },
        {
         "t": "step",
         "html": "Compose a memo to the Captain/Battalion Chief on a subject of your choosing"
        }
       ],
       "noTime": true
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f10",
         "label": "ESO run report – incident #",
         "type": "text"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c8",
     "title": "Lt Skill #6 – Tactical Scenarios",
     "blocks": [
      {
       "t": "html",
       "html": "<p>The tactical exercises are designed to assess your ability to act as an incident commander at the rank of Company Officer within the incident management system. They simulate an emergency scene realistically within the constraints of the testing environment, and they are interactive so raters can observe and assess your abilities related to emergency scene management.</p><p><strong>Overview.</strong> Assume the role of a company officer of the Community Volunteer Fire Department. Each company dispatched to the scene is staffed per the CVFD Minimum Staffing General Order. Time is accelerated: what typically happens in 30 minutes on a real emergency scene happens in about 10 minutes in the tactical exercises.</p><h3>Possible tactical scenarios</h3><ol><li>First-due residential</li><li>First-due apartment</li><li>Hazmat incident</li><li>MVA with entrapment / rollover</li></ol><h3>Scenario completion log (minimum of three scenarios required)</h3>"
      },
      {
       "t": "grid",
       "k": "skills-g11",
       "cols": [
        {
         "h": "Scenario type",
         "type": "text"
        },
        {
         "h": "Date",
         "type": "date"
        },
        {
         "h": "Evaluator",
         "type": "sig"
        },
        {
         "h": "Result",
         "type": "choice",
         "opts": [
          "Pass",
          "Fail"
         ]
        }
       ],
       "rows": [
        {
         "label": "1"
        },
        {
         "label": "2"
        },
        {
         "label": "3"
        },
        {
         "label": "4"
        }
       ],
       "label": "#",
       "count": 3
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c9",
     "title": "Tactical grade sheet 1",
     "blocks": [
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f12",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f13",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f14",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f15",
         "label": "Evaluator initials",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>On-scene size-up</h3><p class=\"hint\">The candidate provides an on-scene size-up radio report based on what the candidate sees in the drive-up frames.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch16",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch17",
       "label": "Building size",
       "options": [
        "Small",
        "Medium",
        "Large",
        "Mega"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch18",
       "label": "Height",
       "options": [
        "1",
        "2"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f19",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch20",
       "label": "Problem description",
       "options": [
        "Nothing showing",
        "Light smoke",
        "Working fire",
        "Defensive fire conditions"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch21",
       "label": "Location of the problem",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Initial incident action plan</h3>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f22",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch23",
       "label": "Location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f24",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch25",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch26",
       "label": "Water supply consideration upon arrival",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f27",
         "label": "Assume and name command",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>360 survey</h3><p class=\"hint\">The candidate verbalizes all ongoing strategic and tactical considerations based on what the candidate sees in each frame of the 360.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch28",
       "label": "Transmits a 360 report",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f29",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch30",
       "label": "Confirms / changes IAP",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f31",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch32",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch33",
       "label": "Accountability location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f34",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Ongoing strategic / tactical assignments</h3>"
      },
      {
       "t": "grid",
       "k": "skills-g35",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Chief officer arrives – CAN report</h3><p class=\"hint\">The candidate verbalizes a CAN radio report upon the arrival of a Chief Officer.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch36",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch37",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch38",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch39",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g40",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Advises additional needs to support the chosen strategy</h3>"
      },
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f41",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f42",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f43",
         "label": "Objective",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>General impression score</h3><p class=\"hint\">Give a general impression score based on the assessor’s knowledge, skills, and experience. The total allotted points are three. Explain your reasoning below.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch44",
       "label": "General impression score (out of 3)",
       "options": [
        "0",
        "1",
        "2",
        "3"
       ],
       "count": true
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f45",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Evaluator attestation</h3><p>I, the evaluator signing below, to the best of my abilities, objectively and fairly assessed the candidate during this tactical assessment.</p>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "skills-f46",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f47",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f48",
         "label": "Date",
         "type": "date"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c10",
     "title": "Tactical grade sheet 2",
     "blocks": [
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f49",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f50",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f51",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f52",
         "label": "Evaluator initials",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>On-scene size-up</h3><p class=\"hint\">The candidate provides an on-scene size-up radio report based on what the candidate sees in the drive-up frames.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch53",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch54",
       "label": "Building size",
       "options": [
        "Small",
        "Medium",
        "Large",
        "Mega"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch55",
       "label": "Height",
       "options": [
        "1",
        "2"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f56",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch57",
       "label": "Problem description",
       "options": [
        "Nothing showing",
        "Light smoke",
        "Working fire",
        "Defensive fire conditions"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch58",
       "label": "Location of the problem",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Initial incident action plan</h3>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f59",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch60",
       "label": "Location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f61",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch62",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch63",
       "label": "Water supply consideration upon arrival",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f64",
         "label": "Assume and name command",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>360 survey</h3><p class=\"hint\">The candidate verbalizes all ongoing strategic and tactical considerations based on what the candidate sees in each frame of the 360.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch65",
       "label": "Transmits a 360 report",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f66",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch67",
       "label": "Confirms / changes IAP",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f68",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch69",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch70",
       "label": "Accountability location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f71",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Ongoing strategic / tactical assignments</h3>"
      },
      {
       "t": "grid",
       "k": "skills-g72",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Chief officer arrives – CAN report</h3><p class=\"hint\">The candidate verbalizes a CAN radio report upon the arrival of a Chief Officer.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch73",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch74",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch75",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch76",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g77",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Advises additional needs to support the chosen strategy</h3>"
      },
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f78",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f79",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f80",
         "label": "Objective",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>General impression score</h3><p class=\"hint\">Give a general impression score based on the assessor’s knowledge, skills, and experience. The total allotted points are three. Explain your reasoning below.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch81",
       "label": "General impression score (out of 3)",
       "options": [
        "0",
        "1",
        "2",
        "3"
       ],
       "count": true
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f82",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Evaluator attestation</h3><p>I, the evaluator signing below, to the best of my abilities, objectively and fairly assessed the candidate during this tactical assessment.</p>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "skills-f83",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f84",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f85",
         "label": "Date",
         "type": "date"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c11",
     "title": "Tactical grade sheet 3",
     "blocks": [
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f86",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f87",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f88",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f89",
         "label": "Evaluator initials",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>On-scene size-up</h3><p class=\"hint\">The candidate provides an on-scene size-up radio report based on what the candidate sees in the drive-up frames.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch90",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch91",
       "label": "Building size",
       "options": [
        "Small",
        "Medium",
        "Large",
        "Mega"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch92",
       "label": "Height",
       "options": [
        "1",
        "2"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f93",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch94",
       "label": "Problem description",
       "options": [
        "Nothing showing",
        "Light smoke",
        "Working fire",
        "Defensive fire conditions"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch95",
       "label": "Location of the problem",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Initial incident action plan</h3>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f96",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch97",
       "label": "Location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f98",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch99",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch100",
       "label": "Water supply consideration upon arrival",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f101",
         "label": "Assume and name command",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>360 survey</h3><p class=\"hint\">The candidate verbalizes all ongoing strategic and tactical considerations based on what the candidate sees in each frame of the 360.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch102",
       "label": "Transmits a 360 report",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f103",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch104",
       "label": "Confirms / changes IAP",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f105",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch106",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch107",
       "label": "Accountability location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f108",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Ongoing strategic / tactical assignments</h3>"
      },
      {
       "t": "grid",
       "k": "skills-g109",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Chief officer arrives – CAN report</h3><p class=\"hint\">The candidate verbalizes a CAN radio report upon the arrival of a Chief Officer.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch110",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch111",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch112",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch113",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g114",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Advises additional needs to support the chosen strategy</h3>"
      },
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f115",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f116",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f117",
         "label": "Objective",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>General impression score</h3><p class=\"hint\">Give a general impression score based on the assessor’s knowledge, skills, and experience. The total allotted points are three. Explain your reasoning below.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch118",
       "label": "General impression score (out of 3)",
       "options": [
        "0",
        "1",
        "2",
        "3"
       ],
       "count": true
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f119",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Evaluator attestation</h3><p>I, the evaluator signing below, to the best of my abilities, objectively and fairly assessed the candidate during this tactical assessment.</p>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "skills-f120",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f121",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f122",
         "label": "Date",
         "type": "date"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "skills-c12",
     "title": "Tactical grade sheet 4",
     "blocks": [
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f123",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f124",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f125",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f126",
         "label": "Evaluator initials",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>On-scene size-up</h3><p class=\"hint\">The candidate provides an on-scene size-up radio report based on what the candidate sees in the drive-up frames.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch127",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch128",
       "label": "Building size",
       "options": [
        "Small",
        "Medium",
        "Large",
        "Mega"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch129",
       "label": "Height",
       "options": [
        "1",
        "2"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f130",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch131",
       "label": "Problem description",
       "options": [
        "Nothing showing",
        "Light smoke",
        "Working fire",
        "Defensive fire conditions"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch132",
       "label": "Location of the problem",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Initial incident action plan</h3>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f133",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch134",
       "label": "Location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f135",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch136",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch137",
       "label": "Water supply consideration upon arrival",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f138",
         "label": "Assume and name command",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>360 survey</h3><p class=\"hint\">The candidate verbalizes all ongoing strategic and tactical considerations based on what the candidate sees in each frame of the 360.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch139",
       "label": "Transmits a 360 report",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f140",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch141",
       "label": "Confirms / changes IAP",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f142",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch143",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch144",
       "label": "Accountability location",
       "options": [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f145",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Ongoing strategic / tactical assignments</h3>"
      },
      {
       "t": "grid",
       "k": "skills-g146",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Chief officer arrives – CAN report</h3><p class=\"hint\">The candidate verbalizes a CAN radio report upon the arrival of a Chief Officer.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch147",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch148",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch149",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch150",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g151",
       "cols": [
        {
         "h": "Unit assignment",
         "type": "text"
        },
        {
         "h": "Task",
         "type": "text"
        },
        {
         "h": "Location",
         "type": "text"
        },
        {
         "h": "Objective",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "html",
       "html": "<h3>Advises additional needs to support the chosen strategy</h3>"
      },
      {
       "t": "fields",
       "cols": "4",
       "fields": [
        {
         "k": "skills-f152",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f153",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f154",
         "label": "Objective",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>General impression score</h3><p class=\"hint\">Give a general impression score based on the assessor’s knowledge, skills, and experience. The total allotted points are three. Explain your reasoning below.</p>"
      },
      {
       "t": "choice",
       "k": "skills-ch155",
       "label": "General impression score (out of 3)",
       "options": [
        "0",
        "1",
        "2",
        "3"
       ],
       "count": true
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f156",
         "label": "Comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Evaluator attestation</h3><p>I, the evaluator signing below, to the best of my abilities, objectively and fairly assessed the candidate during this tactical assessment.</p>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "skills-f157",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f158",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f159",
         "label": "Date",
         "type": "date"
        }
       ]
      }
     ],
     "standard": true
    }
   ],
   "submit": true
  },
  {
   "id": "shift",
   "label": "Shift evaluations",
   "cards": [
    {
     "id": "shift-c1",
     "title": "Shift evaluation log",
     "blocks": [
      {
       "t": "html",
       "html": "<p>The Officer in Charge completes a shift evaluation after each observed training shift or ride-up shift. Ten evaluations follow. Log each completed evaluation below so the Training Division can review progress at a glance.</p>"
      },
      {
       "t": "grid",
       "k": "shift-g1",
       "cols": [
        {
         "h": "Date / shift",
         "type": "text"
        },
        {
         "h": "OIC name / rank",
         "type": "text"
        },
        {
         "h": "Stage",
         "type": "choice",
         "opts": [
          "Learning",
          "Hands-on",
          "Ride-up"
         ]
        },
        {
         "h": "Assessment",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "1"
        },
        {
         "label": "2"
        },
        {
         "label": "3"
        },
        {
         "label": "4"
        },
        {
         "label": "5"
        },
        {
         "label": "6"
        },
        {
         "label": "7"
        },
        {
         "label": "8"
        },
        {
         "label": "9"
        },
        {
         "label": "10"
        }
       ],
       "label": "#"
      }
     ]
    },
    {
     "id": "shift-c2",
     "title": "Shift evaluation 1 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f2",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f3",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f4",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f5",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f6",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch7",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch8",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt9",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt10",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt11",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt12",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt13",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt14",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt15",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt16",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt17",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt18",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt19",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g20",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f21",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f22",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g23",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch24",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f25",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f26",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f27",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f28",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f29",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f30",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck31",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c3",
     "title": "Shift evaluation 2 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f32",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f33",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f34",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f35",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f36",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch37",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch38",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt39",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt40",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt41",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt42",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt43",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt44",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt45",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt46",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt47",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt48",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt49",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g50",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f51",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f52",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g53",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch54",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f55",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f56",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f57",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f58",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f59",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f60",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck61",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c4",
     "title": "Shift evaluation 3 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f62",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f63",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f64",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f65",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f66",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch67",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch68",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt69",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt70",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt71",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt72",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt73",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt74",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt75",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt76",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt77",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt78",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt79",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g80",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f81",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f82",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g83",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch84",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f85",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f86",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f87",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f88",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f89",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f90",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck91",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c5",
     "title": "Shift evaluation 4 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f92",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f93",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f94",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f95",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f96",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch97",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch98",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt99",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt100",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt101",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt102",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt103",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt104",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt105",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt106",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt107",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt108",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt109",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g110",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f111",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f112",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g113",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch114",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f115",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f116",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f117",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f118",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f119",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f120",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck121",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c6",
     "title": "Shift evaluation 5 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f122",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f123",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f124",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f125",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f126",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch127",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch128",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt129",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt130",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt131",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt132",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt133",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt134",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt135",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt136",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt137",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt138",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt139",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g140",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f141",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f142",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g143",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch144",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f145",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f146",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f147",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f148",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f149",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f150",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck151",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c7",
     "title": "Shift evaluation 6 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f152",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f153",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f154",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f155",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f156",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch157",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch158",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt159",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt160",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt161",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt162",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt163",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt164",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt165",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt166",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt167",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt168",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt169",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g170",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f171",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f172",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g173",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch174",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f175",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f176",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f177",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f178",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f179",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f180",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck181",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c8",
     "title": "Shift evaluation 7 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f182",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f183",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f184",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f185",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f186",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch187",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch188",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt189",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt190",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt191",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt192",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt193",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt194",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt195",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt196",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt197",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt198",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt199",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g200",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f201",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f202",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g203",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch204",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f205",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f206",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f207",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f208",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f209",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f210",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck211",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c9",
     "title": "Shift evaluation 8 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f212",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f213",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f214",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f215",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f216",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch217",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch218",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt219",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt220",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt221",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt222",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt223",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt224",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt225",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt226",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt227",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt228",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt229",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g230",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f231",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f232",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g233",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch234",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f235",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f236",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f237",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f238",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f239",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f240",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck241",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c10",
     "title": "Shift evaluation 9 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f242",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f243",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f244",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f245",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f246",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch247",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch248",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt249",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt250",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt251",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt252",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt253",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt254",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt255",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt256",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt257",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt258",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt259",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g260",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f261",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f262",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g263",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch264",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f265",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f266",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f267",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f268",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f269",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f270",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck271",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "shift-c11",
     "title": "Shift evaluation 10 of 10",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Officer in Charge · Lieutenant Candidate Development</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f272",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "shift-f273",
         "label": "Date / shift",
         "type": "text"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "shift-f274",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "shift-f275",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "shift-f276",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch277",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch278",
       "label": "Candidate role",
       "options": [
        "Observing",
        "Assisting",
        "Leading under supervision"
       ]
      },
      {
       "t": "html",
       "html": "<div class=\"callout\">Complete after each observed training shift or ride-up shift. Evaluate the candidate at the expected level of a new company officer. Use N/O when no opportunity occurred. Coaching ratings do not replace the packet’s pass/fail skill sheets or authorized sign-offs.<br><strong>Rating key:</strong> 1 = Below expectations · 2 = Developing / frequent guidance · 3 = Meets expectations for a new lieutenant candidate · 4 = Exceeds expectations consistently · N/O = Not observed. Base ratings on observed behavior, not rank, friendship, or personality.</div>"
      },
      {
       "t": "ratings",
       "items": [
        {
         "k": "shift-rt279",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "shift-rt280",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "shift-rt281",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "shift-rt282",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "shift-rt283",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "shift-rt284",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "shift-rt285",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "shift-rt286",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "shift-rt287",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "shift-rt288",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "shift-rt289",
         "name": "Post-incident analysis & follow-up",
         "desc": "Identifies lessons, communicates feedback, and assigns corrective actions."
        }
       ],
       "scale": [
        "1",
        "2",
        "3",
        "4",
        "N/O"
       ]
      },
      {
       "t": "html",
       "html": "<h3>Coaching &amp; follow-up</h3>"
      },
      {
       "t": "grid",
       "k": "shift-g290",
       "cols": [
        {
         "h": "Activity / incident reference & packet task",
         "type": "text"
        },
        {
         "h": "O = call / T = training",
         "type": "choice",
         "opts": [
          "O",
          "T"
         ]
        },
        {
         "h": "Role / outcome / guidance provided",
         "type": "text"
        }
       ],
       "rows": [
        {},
        {},
        {}
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f291",
         "label": "Observed strengths and evidence supporting ratings",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f292",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "shift-g293",
       "cols": [
        {
         "h": "Follow-up skill / goal",
         "type": "text"
        },
        {
         "h": "Practice or coaching / responsible person",
         "type": "text"
        },
        {
         "h": "Target date / recheck",
         "type": "date"
        }
       ],
       "rows": [
        {},
        {}
       ]
      },
      {
       "t": "choice",
       "k": "shift-ch294",
       "label": "Shift assessment",
       "options": [
        "Meets expectations in observed areas",
        "Continued coaching needed",
        "Remediation / Training Division review needed",
        "Insufficient observation"
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f295",
         "label": "Next-shift focus",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "shift-f296",
         "label": "Candidate comments",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f297",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "shift-f298",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "shift-f299",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "shift-f300",
         "label": "Date",
         "type": "date"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Routing / review</h3>"
      },
      {
       "t": "checks",
       "k": "shift-ck301",
       "items": [
        "Mentor",
        "Battalion Chief",
        "Training Division"
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Candidate signature acknowledges review, not agreement. Formal task-book sign-offs require a Captain or higher per the packet. Final ride-up clearance remains with the packet’s designated approving officers.</p>"
      }
     ],
     "standard": true
    }
   ],
   "submit": true
  }
 ]
};
