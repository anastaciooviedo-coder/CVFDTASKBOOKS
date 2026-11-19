// Task book: Lt. Fast Track Workbook
// Keep every "k" id the same once members have started.
export default {
 "format": "cvfd-taskbook/1",
 "id": "lieutenant-mini-academy-workbook",
 "title": "Lt. Fast Track Workbook",
 "subtitle": "Company Officer Lieutenant · Lieutenant Mini Academy Edition",
 "org": "Community Volunteer Fire Department",
 "description": "Company Officer Lieutenant candidate packet, Lieutenant Mini Academy edition: qualification record, academy schedule and study guide, Station Problem Project, task book, Lt skill sheets #1–#6, evaluations, and ride-up clearance.",
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
       "html": "<p class=\"kicker\">Community Volunteer Fire Department · Training Division</p><h1 class=\"ctitle\">Company Officer Lieutenant</h1><p class=\"kicker2\">Candidate Packet · Lieutenant Mini Academy Edition</p><p class=\"fine\">Updated Lt. qualification packet, academy schedule, Station Problem Project, task book, skill sheets, and evaluation forms in one book.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "ov-name",
         "label": "Candidate name",
         "type": "text"
        },
        {
         "k": "ov-f1",
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
         "k": "ov-f2",
         "label": "Mentor",
         "type": "text"
        },
        {
         "k": "ov-f3",
         "label": "Academy dates",
         "type": "text"
        }
       ]
      }
     ]
    },
    {
     "id": "ov-c2",
     "title": "Using this packet",
     "blocks": [
      {
       "t": "html",
       "html": "<h3>How to use this manual</h3><p>This manual prepares members of the Community Volunteer Fire Department to become fire officers. Completing the program lays a foundation for operating in a limited capacity as a Company Officer Lieutenant. It is meant to be completed together with the remaining required certifications, the Lieutenant Mini Academy, and the other promotion process requirements for the rank of Lieutenant.</p><div class=\"callout\">Completing this program does not ensure automatic eligibility for promotion; please consult the promotions process for Lieutenant for that information.</div><p>The first step is completing and verifying the eligibility prerequisites, done by the Training Division Officer and the Battalion Chief. When you finish, this manual is submitted to the Training Division for review. Once the review is complete, an agency certificate is issued showing that you completed the program and are eligible to promote. Direct questions to the Training Division staff.</p><h3>For the fire officer candidate</h3><p>Congratulations on taking the first step toward the officer ranks. Officer development demands a deliberate training program, strong oversight, mentorship, a full evaluation of knowledge, skills, and abilities (KSAs), and good documentation. Treat these pages as the minimum standard for a CVFD Company Officer. CVFD benchmarks are set intentionally high; becoming an officer here is a privilege not everyone will earn.</p><ul><li><strong>Standards:</strong> completing the packet demonstrates the Job Performance Requirements (JPRs) required by NFPA 1021 and TCFP.</li><li><strong>Timeline:</strong> plan on 3 to 6 months. Month 1 is learning policies and procedures, month 2 is hands-on application of the skills, month 3 is scenarios and riding the officer seat under supervision. The academy covers the core of months 1 and 2 in two weekends.</li><li><strong>Company officers are training officers:</strong> the Training Division relies on Lieutenants to run company-level training.</li><li><strong>JPR check sheets:</strong> journal on them by hand or electronically with your supervisor; supervisors make sure every required activity has a check sheet and a summary.</li></ul><h3>Mentor</h3><p>You will be assigned a mentor to help you find and develop your leadership style. Your mentor may or may not be in your chain of command. Do not hesitate to contact them.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "ov-f4",
         "label": "Name of mentor",
         "type": "text"
        },
        {
         "k": "ov-f5",
         "label": "Phone / email",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<p><strong>For the mentor:</strong> the goal isn’t to clear the candidate as soon as possible. Sign off a performance standard only after the candidate has shown competency and proficiency, measured against what we expect of a new Lieutenant. Share your experience and challenge the candidate’s knowledge of incident strategy and tactics before they ride the seat.</p><h3>Supervising officer</h3><p>This manual guides you in training a member of your crew for their next step. Read through it; each module details the tasks assigned to the candidate. Evaluate honestly and remember this person will likely work in your place while you are off. The Training Division supports you with videos, libraries, manuals, and facilities.</p>"
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
      },
      {
       "t": "html",
       "html": "<h3>Qualification approval (Training Division use)</h3>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "qual-f28",
         "label": "Training Division Captain",
         "type": "sig"
        },
        {
         "k": "qual-f29",
         "label": "Print name",
         "type": "text"
        },
        {
         "k": "qual-f30",
         "label": "Date qualified",
         "type": "date",
         "count": true
        }
       ]
      }
     ]
    }
   ],
   "submit": true
  },
  {
   "id": "acad",
   "label": "Mini Academy",
   "cards": [
    {
     "id": "acad-c1",
     "title": "Lieutenant Mini Academy",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Two weekends, four days. You leave with Lt Skills #1 to #6 evaluated, the Command Simulation Scenarios and Final Multi-Company Scenario signed, task book items performed in training, and a Station Problem Project briefed to the Fire Chief.</p>"
      },
      {
       "t": "table",
       "head": [
        "Day",
        "Theme",
        "Skills evaluated",
        "You leave with"
       ],
       "rows": [
        [
         "Day 1 (Sat, Wknd 1)",
         "Leading the Company",
         "Lt Skill #1",
         "Project problem selected"
        ],
        [
         "Day 2 (Sun, Wknd 1)",
         "Officer Administration",
         "Lt Skills #4, #5",
         "Reports entered, drill delivered, memo drafted"
        ],
        [
         "Day 3 (Sat, Wknd 2)",
         "First-In Tactics",
         "Lt Skills #2, #6",
         "Command simulation scenarios signed"
        ],
        [
         "Day 4 (Sun, Wknd 2)",
         "Burn Evolution and Presentations",
         "Lt Skills #2, #3, #6",
         "Final scenario signed; project briefed"
        ]
       ],
       "widths": [
        20,
        27,
        20,
        33
       ]
      },
      {
       "t": "html",
       "html": "<h3>Day 1: Leading the Company</h3>"
      },
      {
       "t": "table",
       "head": [
        "Time",
        "Block",
        "Skill sheet"
       ],
       "rows": [
        [
         "0800",
         "Welcome, instructor intro, packet and workbook issue, expectations",
         "Packet intro pages"
        ],
        [
         "0830",
         "Introductions: why did you join, creating friction, organizational weakness exercise",
         "Seeds the project"
        ],
        [
         "0915",
         "Academy at a glance, path to Lieutenant, how you will be evaluated",
         "Qualifications pages"
        ],
        [
         "0945",
         "The company officer and the “you” company officer",
         "Supervising Officer intro"
        ],
        [
         "1015",
         "Emotional intelligence: self-awareness, recognition, self-regulation, empathy",
         "Peer Evaluation behaviors"
        ],
        [
         "1100",
         "Submission to authority and situational leadership; Leadership and Ethics (NFPA 1021): leadership styles, ethical principles",
         "Shift Eval: policy and judgment"
        ],
        [
         "1200",
         "Lunch",
         ""
        ],
        [
         "1300",
         "The Ambiguity of Trust: sincerity, capability, dependability; trust as a risk assessment",
         "Peer Evaluation behaviors"
        ],
        [
         "1345",
         "Station conflict handling: sources, process, coach/counsel/discipline, SBI",
         "Lt Skill #1"
        ],
        [
         "1445",
         "Conflict role plays A to D, each candidate graded once",
         "Lt Skill #1 sheet"
        ],
        [
         "1600",
         "Station Problem Project launch, picking a problem, rubric",
         "Project (Section 5)"
        ],
        [
         "1645",
         "Homework and day debrief",
         ""
        ]
       ],
       "widths": [
        10,
        62,
        28
       ]
      },
      {
       "t": "html",
       "html": "<h3>Day 2: Officer Administration</h3>"
      },
      {
       "t": "table",
       "head": [
        "Time",
        "Block",
        "Skill sheet"
       ],
       "rows": [
        [
         "0800",
         "Collect problem statements; administrative roles of the officer",
         "Shift Eval: shift readiness"
        ],
        [
         "0845",
         "Start-of-shift officer checklist; reports every officer owns",
         "Task book admin items"
        ],
        [
         "0930",
         "Writing a good run report; writing a memo",
         "Lt Skill #5"
        ],
        [
         "1015",
         "Lab rotations: ESO run report, FireRescue1 training report, PS Trax, project memo draft",
         "Lt Skill #5 sheet"
        ],
        [
         "1200",
         "Lunch",
         ""
        ],
        [
         "1300",
         "Training Company Officers: the officer as trainer, planning, delivery, and feedback. Company-level training: prepare, brief, show, practice, evaluate, document; Skill Bank assignments",
         "Lt Skill #4"
        ],
        [
         "1400",
         "Drill block: each candidate runs an assigned Skill Bank drill with a simulated injury inject",
         "Lt Skill #4 sheet; EO/PB source sheets"
        ],
        [
         "1600",
         "Evaluating your people: Peer, Shift, and annual evaluations; PR events and pre-fire plans",
         "Evaluation forms; task book"
        ],
        [
         "1645",
         "Between-weekend assignments and debrief",
         ""
        ]
       ],
       "widths": [
        10,
        62,
        28
       ]
      },
      {
       "t": "html",
       "html": "<h3>Day 3: First-In Tactics</h3>"
      },
      {
       "t": "table",
       "head": [
        "Time",
        "Block",
        "Skill sheet"
       ],
       "rows": [
        [
         "0800",
         "Turn in shift/peer evaluations and pre-fire plan; project check-in",
         ""
        ],
        [
         "0830",
         "First-arriving officer responsibilities; size-up",
         "Tactical Grade Sheet"
        ],
        [
         "0900",
         "The ART of Reading Smoke: volume, velocity, density, color; smoke photo drills",
         "Tactical Grade Sheet"
        ],
        [
         "0945",
         "Initial radio report (Blue Card format); 360 report; strategy and command options; water supply",
         "Tactical Grade Sheet"
        ],
        [
         "1045",
         "Task, location, objective; CAN report and transfer of command; accountability and Mayday",
         "Lt Skill #2"
        ],
        [
         "1130",
         "Radio report repetitions in pairs",
         ""
        ],
        [
         "1200",
         "Lunch",
         ""
        ],
        [
         "1300",
         "Tactical scenarios, rotating lanes: 1st due residential, 1st due apartment, hazmat/gas leak, MVA with entrapment",
         "Lt Skill #6; Command Simulation Scenarios"
        ],
        [
         "1600",
         "Burn day briefing: NFPA 1403, burn IAP, roles, walk-through plan",
         ""
        ],
        [
         "1630",
         "Project rehearsal and memo review with mentor or instructor",
         ""
        ]
       ],
       "widths": [
        10,
        62,
        28
       ]
      },
      {
       "t": "html",
       "html": "<h3>Day 4: Final Burn Evolution and Presentations</h3>"
      },
      {
       "t": "table",
       "head": [
        "Time",
        "Block",
        "Skill sheet"
       ],
       "rows": [
        [
         "0700",
         "Cadre setup, NFPA 1403 checklist, water supply, RIT and EMS in place",
         ""
        ],
        [
         "0745",
         "Pre-burn briefing and walk-through for all participants",
         ""
        ],
        [
         "0830",
         "Burn evolutions: each candidate rotates as first-in officer with an inject",
         "Lt Skills #2, #6; Final Multi-Company Scenario"
        ],
        [
         "1200",
         "Lunch and rehab",
         ""
        ],
        [
         "1300",
         "Post-incident analysis: each candidate writes and leads the PIA for their evolution",
         "Lt Skill #3"
        ],
        [
         "1430",
         "Station Problem Project briefings to the Fire Chief (10 min + 5 min Q&A each)",
         "Project; Lt Skill #5 memo"
        ],
        [
         "1630",
         "Packet review, next steps, essential leadership reading list, academy completion",
         "Ride-Up Clearance path"
        ]
       ],
       "widths": [
        10,
        62,
        28
       ]
      },
      {
       "t": "html",
       "html": "<h3>What to bring</h3><ul><li>This packet, a pen, and a notebook.</li><li>Full PPE and SCBA facepiece for Day 2 drills and the Day 4 burn.</li><li>Login for ESO, FireRescue1, and PS Trax (or the training accounts you were issued).</li><li>A laptop or tablet if you have one, for the memo draft and project slides.</li></ul><h3>Between-weekend assignments (due Day 3)</h3>"
      },
      {
       "t": "grid",
       "k": "acad-g1",
       "cols": [
        {
         "h": "Done",
         "type": "check"
        },
        {
         "h": "Checked by",
         "type": "sig"
        }
       ],
       "rows": [
        {
         "label": "Project: gather evidence, develop two options, finish the memo draft"
        },
        {
         "label": "Ride-up shift with a Shift Evaluation completed by the officer in charge"
        },
        {
         "label": "Two Peer Evaluations handed out to members you work with"
        },
        {
         "label": "One pre-fire plan for a target hazard in your first due (task book)"
        },
        {
         "label": "Study size-up, initial report, 360 report, CAN report, and reading smoke"
        }
       ],
       "label": "Assignment",
       "count": 0
      }
     ]
    },
    {
     "id": "acad-c2",
     "title": "Academy study guide",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Key points from each block. Use the notes boxes for your own notes and questions for your mentor.</p><h3>The Company Officer and Emotional Intelligence (Day 1)</h3><ul><li>Your role changes: you move from doing the work to making sure the work gets done safely and well.</li><li>Emotional intelligence: self-awareness, recognizing emotions in others, self-regulation, and empathy.</li><li>Submission to authority: support department decisions in front of the crew; disagree up the chain, in private.</li><li>Situational leadership: adjust how much you direct and how much you support to the member and the task.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f2",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Leadership and Ethics, NFPA 1021 (Day 1)</h3><ul><li>Fire Officer I: requires Fire Fighter II and Fire Instructor I; JPRs cover human resources, community relations, and supervision.</li><li>Leadership styles: autocratic for emergencies, democratic for daily operations, situational to adapt, transformational to build a culture of growth.</li><li>Ethical principles: safety and integrity, fair evaluation, transparent communication.</li><li>Common challenges: loyalty versus law, favoritism, objectivity under pressure, authority balanced with empathy.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f3",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>The Ambiguity of Trust (Day 1)</h3><ul><li>Trust is a value and a risk assessment: you decide how much to rely on someone based on what you know.</li><li>The three-legged stool: Sincerity (do they mean it), Capability (can they do it), Dependability (will they do it every time).</li><li>The formula: xSI + yCA + zDE = TR. Lose one leg and the stool falls.</li><li>Speed of trust: low trust slows everything down and costs more; high trust speeds the crew up.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f4",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Station Conflict Handling (Day 1, Lt Skill #1)</h3><ul><li>Find the right policy first, then follow its process.</li><li>Coach, counsel, or discipline: match the response to the behavior and its history.</li><li>SBI feedback: Situation, Behavior, Impact. Then agree on the expected behavior and what happens if it recurs.</li><li>Follow up, apply actions fairly and equally, and refer to the Employee Assistance Program when warranted.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f5",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Officer Administration (Day 2, Lt Skill #5)</h3><ul><li>Start of shift: staffing, assignments, apparatus and SCBA readiness, station priorities.</li><li>Reports every officer owns: ESO run report, FireRescue1 training report, PS Trax equipment report, memos.</li><li>A good run report: complete, accurate, timely, and tells what happened and why in plain language.</li><li>Memo format: To, From, Through, Date, Subject; one page; purpose, background, recommendation.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f6",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Training Company Officers (Day 2, Lt Skill #4)</h3><ul><li>Every company officer is a training officer. The Training Division relies on Lieutenants for company-level training.</li><li>Run every drill the same way: prepare, brief (including safety and stop-work), show, practice, evaluate, document.</li><li>Evaluate to the source sheet: check off only what you actually saw; give specific feedback and a recheck plan.</li><li>Skill Bank: the officer assigns all ten skills; four must be completed before Skill #4 is signed.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f7",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>First-In Tactics (Day 3, Lt Skills #2 and #6)</h3><ul><li>Initial radio report (Blue Card): building size, height, occupancy; problem; location; strategy; water supply; name and assume command.</li><li>360 report: confirm or change the IAP, secure utilities, name the accountability location.</li><li>Assignments: task, location, objective for every arriving unit.</li><li>CAN report and transfer: Conditions, Actions, Needs, given face to face to the arriving chief.</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f8",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>The ART of Reading Smoke (Day 3)</h3><ul><li>Volume: how much smoke for the size of the building; it tells you how much fuel is off-gassing.</li><li>Velocity: pushed by heat (rises and slows) or by volume (pushed and slows quickly); turbulent smoke is a warning sign.</li><li>Density: thick smoke is fuel; the thicker it is, the more dangerous the event can be.</li><li>Color: shows the stage of heating and how far away the fire is; read it with the other three.</li><li>Put it together: what is the smoke telling you, where is the fire, and how fast is it changing?</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f9",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Final Burn Evolution (Day 4, Lt Skills #2, #3, #6)</h3><ul><li>Safety first: NFPA 1403, walk-through of the prop, RIT and EMS in place, anyone can call stop.</li><li>You ride the officer seat once with an inject: Mayday, loss of water, found victim, or rapid fire growth.</li><li>After your evolution, write and lead an informal post-incident analysis with your crew (Lt Skill #3).</li></ul>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "acad-f10",
         "label": "My notes and questions",
         "type": "textarea"
        }
       ]
      }
     ]
    }
   ],
   "submit": true
  },
  {
   "id": "proj",
   "label": "Station project",
   "cards": [
    {
     "id": "proj-c1",
     "title": "Station Problem Project",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Identify a real problem your station is facing, prove it, develop solutions, and brief the Fire Chief with a recommendation you would be willing to lead.</p><h3>Choosing the problem</h3><ul><li><strong>Real:</strong> it affects your station today.</li><li><strong>Specific:</strong> “weekday daytime turnout at Station 1”, not “morale”.</li><li><strong>Measurable:</strong> you can show numbers before and after.</li><li><strong>Within reach:</strong> a Lieutenant could lead the fix.</li><li><strong>Worth the chief’s time:</strong> it affects safety, service, or people.</li></ul><p class=\"hint\">Examples: low weekday turnout, skipped or undocumented apparatus/SCBA checks, falling training attendance, first-year member retention, outdated pre-fire plans, PPE cleaning and cancer-reduction habits, radio dead spots.</p><h3>Milestones</h3>"
      },
      {
       "t": "grid",
       "k": "proj-g1",
       "cols": [
        {
         "h": "Who checks it",
         "type": "label"
        },
        {
         "h": "Initials",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Day 1 night – one-sentence problem statement; confirm with mentor",
         "sub": "Mentor"
        },
        {
         "label": "Day 2 0800 – problem statement turned in",
         "sub": "Lead instructor"
        },
        {
         "label": "Day 2 lab – memo first draft",
         "sub": "Lab evaluator"
        },
        {
         "label": "Between weekends – evidence gathered; two options with cost, people, time",
         "sub": "Mentor"
        },
        {
         "label": "Day 3 1630 – rehearsal and memo review",
         "sub": "Instructor / mentor"
        },
        {
         "label": "Day 4 1430 – memo submitted; 10-minute briefing plus 5 minutes of questions",
         "sub": "Fire Chief and Training Division"
        }
       ],
       "label": "When / milestone",
       "count": 1
      },
      {
       "t": "html",
       "html": "<h3>Project worksheet</h3>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f2",
         "label": "Problem statement (one sentence)",
         "type": "textarea",
         "count": true
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f3",
         "label": "Evidence (numbers, records, observations)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f4",
         "label": "Root cause (why does it happen?)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f5",
         "label": "Option 1 (cost, people, time)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f6",
         "label": "Option 2 (cost, people, time)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f7",
         "label": "Recommendation and why",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f8",
         "label": "Implementation plan (owner, timeline, how you will measure success)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Memo format</h3>"
      },
      {
       "t": "table",
       "head": [
        "Part",
        "What goes in it"
       ],
       "rows": [
        [
         "Header",
         "TO: Fire Chief · THROUGH: Captain, Battalion Chief · FROM: your name · DATE · SUBJECT"
        ],
        [
         "Purpose",
         "One or two sentences: what you are asking the Chief to decide"
        ],
        [
         "Background",
         "The problem and your evidence"
        ],
        [
         "Options",
         "Two or more, each with cost, staffing, and time"
        ],
        [
         "Recommendation",
         "Your choice, why, and the implementation plan"
        ]
       ],
       "widths": [
        22,
        78
       ]
      },
      {
       "t": "html",
       "html": "<h3>Scoring rubric (100 points, 70 to pass)</h3>"
      },
      {
       "t": "grid",
       "k": "proj-g9",
       "cols": [
        {
         "h": "Meets the standard",
         "type": "label"
        },
        {
         "h": "Points",
         "type": "label"
        },
        {
         "h": "Score",
         "type": "number"
        }
       ],
       "rows": [
        {
         "label": "Problem statement",
         "sub": "Clear, specific, important to the station|15"
        },
        {
         "label": "Evidence",
         "sub": "Data or documentation, not just opinion|20"
        },
        {
         "label": "Solutions",
         "sub": "Two or more realistic options with cost, staffing, and time|20"
        },
        {
         "label": "Recommendation and plan",
         "sub": "Justified choice; owner, timeline, success measure|20"
        },
        {
         "label": "Memo",
         "sub": "Department format, one page, professional|10"
        },
        {
         "label": "Briefing",
         "sub": "Concise, on time, handles questions|15"
        }
       ],
       "label": "Area"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "proj-f10",
         "label": "Total score (out of 100)",
         "type": "number",
         "count": true
        }
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"hint\">Below 70: the candidate rebriefs to the Battalion Chief within 30 days.</p>"
      },
      {
       "t": "fields",
       "cols": "2-2-1",
       "fields": [
        {
         "k": "proj-f11",
         "label": "Candidate",
         "type": "sig"
        },
        {
         "k": "proj-f12",
         "label": "Fire Chief",
         "type": "sig",
         "count": true
        },
        {
         "k": "proj-f13",
         "label": "Date",
         "type": "date"
        }
       ]
      }
     ]
    }
   ],
   "submit": true
  },
  {
   "id": "task",
   "label": "Task book",
   "cards": [
    {
     "id": "task-c1",
     "title": "Task book",
     "blocks": [
      {
       "t": "html",
       "html": "<p>This Task Book shall be completed before being assessed for designation as a Company Officer Lieutenant. Completing every item is your responsibility. We will not babysit you or manage your time. Accountability is a crucial element for those who aspire to lead. Bring problems completing assignments to your officer’s immediate attention.</p><div class=\"callout\">A Captain or higher-ranking officer shall evaluate all items and shall not sign off a task until you demonstrate a clear understanding and proficiency. You will complete a minimum of three tactical scenarios, administered by the Training Division Officer, a Company Officer, and the Battalion Chief. Once completed, you earn the title of Ride-Up Company Officer.</div>"
      }
     ]
    },
    {
     "id": "task-c2",
     "title": "Task performance record",
     "blocks": [
      {
       "t": "html",
       "html": "<p>For each performance, mark <strong>O</strong> if it was performed on a call for service or <strong>T</strong> if it was performed in a training environment, then the evaluating officer initials it. <strong>Req.</strong> is the number of performances required. The academy column shows where you can earn a “T”.</p>"
      },
      {
       "t": "reps",
       "head": "Task",
       "max": 11,
       "items": [
        {
         "k": "task-rp1",
         "html": "Perform an initial scene size-up",
         "req": 11,
         "note": "Day 3, Day 4"
        },
        {
         "k": "task-rp2",
         "html": "Perform a 360-degree size-up and follow-up report",
         "req": 11,
         "note": "Day 3, Day 4"
        },
        {
         "k": "task-rp3",
         "html": "Formulate an Incident Action Plan for an incident",
         "req": 11,
         "note": "Day 3, Day 4"
        },
        {
         "k": "task-rp4",
         "html": "Utilize the MDT to respond to calls, view notes, and update status",
         "req": 11
        },
        {
         "k": "task-rp5",
         "html": "Act as the first-arriving IC and assign the first three crews arriving",
         "req": 3,
         "note": "Day 3, Day 4"
        },
        {
         "k": "task-rp6",
         "html": "Conduct an IC pass-off to an incoming District Chief",
         "req": 5,
         "note": "Day 3, Day 4"
        },
        {
         "k": "task-rp7",
         "html": "Direct and supervise victim extrication of an MVA with entrapment",
         "req": 3,
         "note": "Day 3 lane"
        },
        {
         "k": "task-rp8",
         "html": "Direct and supervise the extinguishment of a car fire",
         "req": 3
        },
        {
         "k": "task-rp9",
         "html": "Direct and supervise search and rescue of a structure fire",
         "req": 5,
         "note": "Day 4"
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
         "req": 11,
         "note": "Day 2 lab"
        },
        {
         "k": "task-rp16",
         "html": "Correctly enter a training report",
         "req": 11,
         "note": "Day 2 lab"
        },
        {
         "k": "task-rp17",
         "html": "Direct and supervise a crew training exercise",
         "req": 11,
         "note": "Day 2 drill"
        },
        {
         "k": "task-rp18",
         "html": "Correctly conduct a public relations event",
         "req": 2
        },
        {
         "k": "task-rp19",
         "html": "Correctly conduct a First Report of Injury and identify when it is necessary",
         "req": 3,
         "note": "Day 2 drill inject"
        },
        {
         "k": "task-rp20",
         "html": "Correctly direct your crew to perform a forward lay with fire attack",
         "req": 4,
         "note": "Day 4"
        },
        {
         "k": "task-rp21",
         "html": "Correctly conduct a RIT operation with rescue",
         "req": 4,
         "note": "Day 4 inject"
        },
        {
         "k": "task-rp22",
         "html": "Direct and mitigate a commercial fire alarm",
         "req": 5
        },
        {
         "k": "task-rp23",
         "html": "Direct and mitigate a Haz-Mat scenario",
         "req": 4,
         "note": "Day 3 lane"
        },
        {
         "k": "task-rp24",
         "html": "Direct and mitigate a gas leak",
         "req": 5,
         "note": "Day 3 lane"
        },
        {
         "k": "task-rp25",
         "html": "Direct and complete a pre-fire plan",
         "req": 5,
         "note": "Between weekends"
        },
        {
         "k": "task-rp26",
         "html": "Complete an annual employee evaluation",
         "req": 2,
         "note": "Day 2"
        }
       ],
       "noteHead": "Academy"
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
   "label": "Lt skill sheets",
   "cards": [
    {
     "id": "skills-c1",
     "title": "Lt skill sheets",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Each sheet is pass/fail. An evaluator signs the TEST block; a failed sheet is retested on a later date. The academy schedule shows where each sheet is evaluated.</p>"
      }
     ]
    },
    {
     "id": "skills-c2",
     "title": "Lt Skill #1 – Recommending Action for Member-Related Problems",
     "blocks": [
      {
       "t": "ps",
       "k": "skills-ps1",
       "desc": [
        "<strong>Objective:</strong> Section 901 Fire Officer I. Recommend action for member-related problems, given a member with a situation requiring assistance and the member assistance policies and procedures, so that the situation is identified and the actions taken are within the established policies and procedures. (4.2.4)",
        "<strong>Instructions:</strong> Using the policies and procedures provided, the Fire Officer I candidate shall demonstrate the proper method of applying human resources policies and procedures, so that the situation is identified and the actions recommended are within the established policies and procedures.",
        "<strong>Academy:</strong> Day 1 role plays"
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
       "noTime": true,
       "candidateSig": true
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
       "k": "skills-ps2",
       "desc": [
        "<strong>Objective:</strong> Section 901. Demonstrate the ability to effectively communicate in writing utilizing technology provided by the AHJ; write reports, letters, and memos; operate in an information management system; and effectively operate at all levels in the incident management system utilized by the AHJ. (4.1.2) Assign tasks or responsibilities to unit members, given an assignment at an emergency incident, so that the instructions are complete, clear, and concise; safety considerations are addressed; and the desired outcomes are conveyed. (4.2.1) Develop an initial action plan, given size-up information for an incident and assigned emergency response resources, so that resources are deployed to control the emergency. (4.6.1) Implement an action plan at an emergency operation, given assigned resources, type of incident, and a preliminary plan, so that resources are deployed to mitigate the situation. (4.6.2)",
        "<strong>Instructions:</strong> Using the policies and procedures provided, the Ride-Up Officer candidate shall develop an initial action plan from the given size-up and assigned resources information, so that resources are deployed to control the emergency.",
        "<strong>Academy:</strong> Day 3 scenarios and Day 4 burn"
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
       "noTime": true,
       "candidateSig": true
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
       "k": "skills-ps3",
       "desc": [
        "<strong>Objective:</strong> Section 901. Develop and conduct a post-incident analysis, given a single-unit incident and post-incident analysis policies, procedures, and forms, so that all required critical elements are identified and communicated, and the approved forms are completed and processed in accordance with policies and procedures. (4.6.3)",
        "<strong>Instructions:</strong> The Ride-Up Officer candidate will be provided with a single-unit emergency incident scenario/training, associated forms, and reports from the emergency incident. The candidate shall use the provided information, following departmental or agency policies and procedures, to develop a single-unit post-incident analysis. All key components of the post-incident analysis must be appropriately addressed. The candidate shall first develop a written post-incident analysis report and then present the findings to the examiner in a verbal report.",
        "<strong>Academy:</strong> Day 4 afternoon, for your own burn evolution"
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
       "noTime": true,
       "candidateSig": true
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
       "html": "<p>The assigned officer or Training Division assigns all five EO skills and all five probationary skills listed in the Assigned Skill Bank. The candidate does not select the skills. The officer sets the order, training dates, apparatus, and scenario conditions.</p><div class=\"callout\">Four of the ten skills must be successfully completed before Skill #4 is signed off. Skills may be evaluated on the same day or over multiple supervised company-training sessions.</div><ul><li>For each assignment, use the complete performance sheet from the identified source book. Its task steps, equipment, conditions, time limits, and pass/fail requirements govern the practical demonstration. The Skill Bank descriptions are summaries, not replacement checklists.</li><li>The candidate must demonstrate the skill, explain its purpose and safety requirements, direct company members, evaluate at least one member’s demonstration using the source checklist, and document results and follow-up.</li><li>Include an evaluator-provided simulated injury or exposure in at least one session. Identify the hazard, apply the appropriate policy, communicate preventive actions, and complete the required simulated reporting.</li><li>The supervising evaluator must directly observe and verify the candidate’s demonstration, instruction, and checklist accuracy. Stop unsafe actions and document remediation before reassessment.</li></ul><p><strong>Sign-off authority.</strong> Candidate-completed checklists demonstrate evaluation ability only. A ride-up candidate may not independently authorize EO qualification sign-offs. Any official member task-book sign-off must be verified and signed by personnel authorized under that source book. Final Skill #4 approval is completed by the authorized supervising evaluator.</p><p><strong>Academy:</strong> Day 2 drill block (one Skill Bank drill with an injury inject); remaining items on shift.</p><h3>Assigned Skill Bank</h3>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "skills-f4",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "skills-f5",
         "label": "Assigned by",
         "type": "text"
        }
       ]
      },
      {
       "t": "grid",
       "k": "skills-g6",
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
       "k": "skills-ps7",
       "desc": [
        "<strong>Objective:</strong> Given assigned skills from the updated EO Book and Probationary Phase Book, current department policies, the applicable source performance sheets, apparatus, equipment, and a company, the lieutenant candidate shall personally demonstrate each assigned skill to its source performance standard; prepare and direct safe company-level training; observe a member performing the skill; accurately check off each performance step and determine pass/fail; provide corrective coaching; and complete the required training documentation under the assigned officer’s supervision.",
        "<strong>Academy:</strong> Day 2 drill block (one Skill Bank drill with an injury inject); remaining items on shift"
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
         "html": "Explains the purpose, sequence, expected outcomes, and common errors clearly to company members. Assigns member roles and directs a hands-on evolution with clear instructions and appropriate supervision."
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
       "noTime": true,
       "candidateSig": true
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
       "k": "skills-ps8",
       "desc": [
        "<strong>Objective:</strong> The ability to effectively communicate in writing utilizing technology provided by the AHJ; write reports, letters, and memos; operate in an information management system; and effectively operate at all levels in the incident management system utilized by the AHJ. (4.1.2) Explain the purpose of each management component of the organization, given an organization chart, so that the explanation is current and accurate and clearly identifies the purpose and mission of the organization. (4.4.4) Explain the needs and benefits of collecting incident response data, given the goals and mission of the organization, so that incident response reports are timely and accurate. (4.4.5)",
        "<strong>Instructions:</strong> The Ride-Up Officer candidate will be provided with an organization chart and the goals and mission of the organization. The candidate will explain the purpose of each management component of the organization and the needs and benefits of collecting incident response data, utilizing AHJ information management system data.",
        "<strong>Academy:</strong> Day 2 lab; memo finalized for the Day 4 project"
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
         "html": "Compose a memo to the Captain/Battalion Chief on a subject of your choosing (your Station Problem Project memo may be used)"
        }
       ],
       "noTime": true,
       "candidateSig": true
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "skills-f9",
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
       "html": "<p>The tactical exercises are designed to assess your ability to act as an incident commander at the rank of Company Officer within the incident management system. They simulate an emergency scene realistically within the constraints of the testing environment, and they are interactive so raters can observe and assess your abilities related to emergency scene management.</p><p><strong>Overview.</strong> Assume the role of a company officer of the Community Volunteer Fire Department. Each company dispatched to the scene is staffed per the CVFD Minimum Staffing General Order. Time is accelerated: what typically happens in 30 minutes on a real emergency scene happens in about 10 minutes in the tactical exercises.</p><h3>Possible tactical scenarios (Academy Day 3 lanes, Day 4 burn)</h3><ol><li>First-due residential</li><li>First-due apartment</li><li>Hazmat incident</li><li>MVA with entrapment / rollover</li></ol><h3>Scenario completion log (minimum of three)</h3>"
      },
      {
       "t": "grid",
       "k": "skills-g10",
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
         "k": "skills-f11",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f12",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f13",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f14",
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
       "k": "skills-ch15",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch16",
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
       "k": "skills-ch17",
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
         "k": "skills-f18",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch19",
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
       "k": "skills-ch20",
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
         "k": "skills-f21",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch22",
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
         "k": "skills-f23",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch24",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch25",
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
         "k": "skills-f26",
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
       "k": "skills-ch27",
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
         "k": "skills-f28",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch29",
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
         "k": "skills-f30",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch31",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch32",
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
         "k": "skills-f33",
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
       "k": "skills-g34",
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
       "k": "skills-ch35",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch36",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch37",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch38",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g39",
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
         "k": "skills-f40",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f41",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f42",
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
       "k": "skills-ch43",
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
         "k": "skills-f44",
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
         "k": "skills-f45",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f46",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f47",
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
         "k": "skills-f48",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f49",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f50",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f51",
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
       "k": "skills-ch52",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch53",
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
       "k": "skills-ch54",
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
         "k": "skills-f55",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch56",
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
       "k": "skills-ch57",
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
         "k": "skills-f58",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch59",
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
         "k": "skills-f60",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch61",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch62",
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
         "k": "skills-f63",
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
       "k": "skills-ch64",
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
         "k": "skills-f65",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch66",
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
         "k": "skills-f67",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch68",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch69",
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
         "k": "skills-f70",
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
       "k": "skills-g71",
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
       "k": "skills-ch72",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch73",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch74",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch75",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g76",
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
         "k": "skills-f77",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f78",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f79",
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
       "k": "skills-ch80",
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
         "k": "skills-f81",
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
         "k": "skills-f82",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f83",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f84",
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
         "k": "skills-f85",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f86",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f87",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f88",
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
       "k": "skills-ch89",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch90",
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
       "k": "skills-ch91",
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
         "k": "skills-f92",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch93",
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
       "k": "skills-ch94",
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
         "k": "skills-f95",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch96",
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
         "k": "skills-f97",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch98",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch99",
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
         "k": "skills-f100",
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
       "k": "skills-ch101",
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
         "k": "skills-f102",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch103",
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
         "k": "skills-f104",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch105",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch106",
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
         "k": "skills-f107",
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
       "k": "skills-g108",
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
       "k": "skills-ch109",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch110",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch111",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch112",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g113",
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
         "k": "skills-f114",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f115",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f116",
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
       "k": "skills-ch117",
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
         "k": "skills-f118",
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
         "k": "skills-f119",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f120",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f121",
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
         "k": "skills-f122",
         "label": "Candidate #",
         "type": "text"
        },
        {
         "k": "skills-f123",
         "label": "Date",
         "type": "date"
        },
        {
         "k": "skills-f124",
         "label": "Scenario",
         "type": "text"
        },
        {
         "k": "skills-f125",
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
       "k": "skills-ch126",
       "label": "Reports en route",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch127",
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
       "k": "skills-ch128",
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
         "k": "skills-f129",
         "label": "Occupancy type",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch130",
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
       "k": "skills-ch131",
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
         "k": "skills-f132",
         "label": "Task",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch133",
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
         "k": "skills-f134",
         "label": "Objectives",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch135",
       "label": "Strategy",
       "options": [
        "Offensive",
        "Defensive"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch136",
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
         "k": "skills-f137",
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
       "k": "skills-ch138",
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
         "k": "skills-f139",
         "label": "If no, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch140",
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
         "k": "skills-f141",
         "label": "If changed, reason",
         "type": "text"
        }
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch142",
       "label": "Secures utilities",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch143",
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
         "k": "skills-f144",
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
       "k": "skills-g145",
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
       "k": "skills-ch146",
       "label": "Conditions within the structure",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch147",
       "label": "TIC reading",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch148",
       "label": "Command advises their action taken",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "choice",
       "k": "skills-ch149",
       "label": "If yes, is it correct?",
       "options": [
        "Yes",
        "No"
       ]
      },
      {
       "t": "grid",
       "k": "skills-g150",
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
         "k": "skills-f151",
         "label": "Task",
         "type": "text"
        },
        {
         "k": "skills-f152",
         "label": "Location",
         "type": "text"
        },
        {
         "k": "skills-f153",
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
       "k": "skills-ch154",
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
         "k": "skills-f155",
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
         "k": "skills-f156",
         "label": "Evaluator name",
         "type": "text"
        },
        {
         "k": "skills-f157",
         "label": "Evaluator signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "skills-f158",
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
   "id": "evals",
   "label": "Evaluations",
   "cards": [
    {
     "id": "evals-c1",
     "title": "Evaluations",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Peer and Shift Evaluations support your development. They do not replace the pass/fail skill sheets or authorize task-book sign-offs. Hand out at least two Peer Evaluations and get at least one Shift Evaluation between weekends.</p>"
      },
      {
       "t": "grid",
       "k": "evals-g1",
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
        }
       ],
       "label": "#"
      }
     ]
    },
    {
     "id": "evals-c2",
     "title": "Shift evaluation 1",
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
         "k": "evals-f2",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "evals-f3",
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
         "k": "evals-f4",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "evals-f5",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "evals-f6",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch7",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch8",
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
         "k": "evals-rt9",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "evals-rt10",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "evals-rt11",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "evals-rt12",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "evals-rt13",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "evals-rt14",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "evals-rt15",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "evals-rt16",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "evals-rt17",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "evals-rt18",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "evals-rt19",
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
       "k": "evals-g20",
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
         "k": "evals-f21",
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
         "k": "evals-f22",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "evals-g23",
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
       "k": "evals-ch24",
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
         "k": "evals-f25",
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
         "k": "evals-f26",
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
         "k": "evals-f27",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "evals-f28",
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
         "k": "evals-f29",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "evals-f30",
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
       "k": "evals-ck31",
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
     "id": "evals-c3",
     "title": "Shift evaluation 2",
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
         "k": "evals-f32",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "evals-f33",
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
         "k": "evals-f34",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "evals-f35",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "evals-f36",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch37",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch38",
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
         "k": "evals-rt39",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "evals-rt40",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "evals-rt41",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "evals-rt42",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "evals-rt43",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "evals-rt44",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "evals-rt45",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "evals-rt46",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "evals-rt47",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "evals-rt48",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "evals-rt49",
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
       "k": "evals-g50",
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
         "k": "evals-f51",
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
         "k": "evals-f52",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "evals-g53",
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
       "k": "evals-ch54",
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
         "k": "evals-f55",
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
         "k": "evals-f56",
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
         "k": "evals-f57",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "evals-f58",
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
         "k": "evals-f59",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "evals-f60",
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
       "k": "evals-ck61",
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
     "id": "evals-c4",
     "title": "Shift evaluation 3",
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
         "k": "evals-f62",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "evals-f63",
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
         "k": "evals-f64",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "evals-f65",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "evals-f66",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch67",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch68",
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
         "k": "evals-rt69",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "evals-rt70",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "evals-rt71",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "evals-rt72",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "evals-rt73",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "evals-rt74",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "evals-rt75",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "evals-rt76",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "evals-rt77",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "evals-rt78",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "evals-rt79",
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
       "k": "evals-g80",
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
         "k": "evals-f81",
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
         "k": "evals-f82",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "evals-g83",
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
       "k": "evals-ch84",
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
         "k": "evals-f85",
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
         "k": "evals-f86",
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
         "k": "evals-f87",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "evals-f88",
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
         "k": "evals-f89",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "evals-f90",
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
       "k": "evals-ck91",
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
     "id": "evals-c5",
     "title": "Shift evaluation 4",
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
         "k": "evals-f92",
         "label": "Candidate",
         "type": "name"
        },
        {
         "k": "evals-f93",
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
         "k": "evals-f94",
         "label": "Station / apparatus",
         "type": "text"
        },
        {
         "k": "evals-f95",
         "label": "OIC name / rank",
         "type": "text"
        },
        {
         "k": "evals-f96",
         "label": "Hours observed",
         "type": "number"
        }
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch97",
       "label": "Stage",
       "options": [
        "Learning",
        "Hands-on",
        "Supervised ride-up"
       ]
      },
      {
       "t": "choice",
       "k": "evals-ch98",
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
         "k": "evals-rt99",
         "name": "Shift readiness & administration",
         "desc": "Checks staffing, assignments, apparatus readiness, and station priorities."
        },
        {
         "k": "evals-rt100",
         "name": "Policy application & judgment",
         "desc": "Applies department procedures and seeks guidance within authority."
        },
        {
         "k": "evals-rt101",
         "name": "Crew leadership & member concerns",
         "desc": "Assigns work fairly; coaches members and refers concerns appropriately."
        },
        {
         "k": "evals-rt102",
         "name": "Size-up & initial action plan",
         "desc": "Assesses conditions, conducts / accounts for 360, and selects an appropriate plan."
        },
        {
         "k": "evals-rt103",
         "name": "Command & resource assignments",
         "desc": "Uses ICS; gives clear task, location, and objective assignments; requests resources."
        },
        {
         "k": "evals-rt104",
         "name": "Safety & crew accountability",
         "desc": "Recognizes hazards, tracks personnel, and intervenes when unsafe conditions arise."
        },
        {
         "k": "evals-rt105",
         "name": "Radio reports & command transfer",
         "desc": "Provides clear size-up / CAN reports, updates, and transfer information."
        },
        {
         "k": "evals-rt106",
         "name": "Tactical supervision & reassessment",
         "desc": "Coordinates assigned operations and adapts to changing conditions."
        },
        {
         "k": "evals-rt107",
         "name": "Company training & instruction",
         "desc": "Prepares, briefs, safely conducts, and evaluates company-level training."
        },
        {
         "k": "evals-rt108",
         "name": "Reports & documentation",
         "desc": "Completes incident / training records, equipment reports, and required communications."
        },
        {
         "k": "evals-rt109",
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
       "k": "evals-g110",
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
         "k": "evals-f111",
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
         "k": "evals-f112",
         "label": "Improvement needs / officer intervention (safety issues, corrective action, and response)",
         "type": "textarea"
        }
       ]
      },
      {
       "t": "grid",
       "k": "evals-g113",
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
       "k": "evals-ch114",
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
         "k": "evals-f115",
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
         "k": "evals-f116",
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
         "k": "evals-f117",
         "label": "OIC signature",
         "type": "sig",
         "count": true
        },
        {
         "k": "evals-f118",
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
         "k": "evals-f119",
         "label": "Candidate signature",
         "type": "sig"
        },
        {
         "k": "evals-f120",
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
       "k": "evals-ck121",
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
  },
  {
   "id": "done",
   "label": "Completion",
   "cards": [
    {
     "id": "done-c1",
     "title": "Completion",
     "blocks": [
      {
       "t": "html",
       "html": "<h3>Packet crosswalk</h3>"
      },
      {
       "t": "grid",
       "k": "done-g1",
       "cols": [
        {
         "h": "Where it happens",
         "type": "label"
        },
        {
         "h": "Date done",
         "type": "date"
        },
        {
         "h": "Signed by",
         "type": "sig"
        }
       ],
       "rows": [
        {
         "label": "Lt Skill #1 · Member-related problems",
         "sub": "Day 1 role plays"
        },
        {
         "label": "Lt Skill #2 · Action plans and assignments",
         "sub": "Day 3 scenarios, Day 4 burn"
        },
        {
         "label": "Lt Skill #3 · Post-incident analysis",
         "sub": "Day 4 afternoon"
        },
        {
         "label": "Lt Skill #4 · Company-level training",
         "sub": "Day 2 drill block; remaining Skill Bank items on shift"
        },
        {
         "label": "Lt Skill #5 · Reports and memo",
         "sub": "Day 2 lab; memo finalized Day 4"
        },
        {
         "label": "Lt Skill #6 · Tactical scenarios",
         "sub": "Day 3 lanes, Day 4 burn"
        },
        {
         "label": "Command Simulation Scenarios",
         "sub": "Day 3"
        },
        {
         "label": "Final Multi-Company Scenario Evaluation",
         "sub": "Day 4 burn"
        },
        {
         "label": "Station Problem Project",
         "sub": "Day 4 briefing to the Fire Chief"
        },
        {
         "label": "Peer and Shift Evaluations",
         "sub": "Between weekends and on ride-ups"
        }
       ],
       "label": "Packet item",
       "count": 1
      },
      {
       "t": "html",
       "html": "<h3>Still required outside the academy</h3><ul><li>TCFP/SFFMA Fire Officer I, TCFP/SFFMA Instructor I, and TCFP Incident Safety Officer certifications.</li><li>NIMS 300 and the required years of emergency services experience.</li><li>Task book items marked “O” (performed on real calls), signed by a Captain or higher.</li><li>Mentor sign-off; task book submitted with candidate and mentor emails.</li><li>The department’s Lieutenant promotions process.</li></ul><h3>Keep learning: essential leadership reading</h3>"
      },
      {
       "t": "table",
       "head": [
        "Team dynamics",
        "Fire service specific",
        "Military leadership"
       ],
       "rows": [
        [
         "Leaders Eat Last, Simon Sinek",
         "Pride and Ownership, Rick Lasky",
         "Extreme Ownership, Jocko Willink"
        ],
        [
         "Five Dysfunctions of a Team, Patrick Lencioni",
         "First In, Last Out, John Salka",
         "Art of War, Sun Tzu"
        ],
        [
         "Leadership Tactics, John Maxwell",
         "Rascal, Chris Brady",
         "Leading in the Shadows, Kyle Lamb"
        ],
        [
         "From Buddy to Boss, James Shaw",
         "",
         ""
        ]
       ]
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "done-f2",
         "label": "Pick one book for your first year as an officer",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Submitting the packet</h3><p>Signatures for completion of the tasks should only be given when both the candidate and the mentor feel the candidate has successfully and competently completed them. Once the task book is complete, submit it to the Division Chief of Training and the Shift Training Officer along with emails from the candidate and mentor expressing their approval and readiness to perform as Company Officer Lieutenant. Submit the notebook as a professional document with all necessary additional documentation. After receipt, appropriate notifications will be made to the executive staff.</p><p>If you have questions, concerns, or need further assistance, contact the Training Division. <strong>Have fun, learn a lot, and enjoy the experience!</strong></p>"
      }
     ]
    },
    {
     "id": "done-c2",
     "title": "Ride-up clearance",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"kicker\">Company Officer · Lieutenant</p><h1 class=\"ctitle\">Ride-Up Clearance</h1><p>We do hereby attest that the employee known to us as {{name}} has completed the Community Volunteer Fire Department Acting Lieutenant Ride-Up Qualifications in its entirety. We have verified that this curriculum is complete, as indicated by our signatures below. Furthermore, the individual named herein is entitled to all privileges associated with completing this curriculum and qualifications. We attest that this individual has completed all necessary requirements, and we maintain confidence in the employee’s ability to function at this level of professional standards.</p>"
      },
      {
       "t": "fields",
       "cols": "2-1",
       "fields": [
        {
         "k": "done-f3",
         "label": "Training Division Officer",
         "type": "sig",
         "count": true
        },
        {
         "k": "done-f4",
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
         "k": "done-f5",
         "label": "Battalion Chief",
         "type": "sig",
         "count": true
        },
        {
         "k": "done-f6",
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
         "k": "done-f7",
         "label": "Assistant Chief Officer",
         "type": "sig",
         "count": true
        },
        {
         "k": "done-f8",
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
  }
 ]
};
