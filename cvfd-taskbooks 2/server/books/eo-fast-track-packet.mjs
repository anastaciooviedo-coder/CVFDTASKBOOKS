// Task book: E/O Fast Track Packet
// Keep every "k" id the same once members have started.
export default {
 "format": "cvfd-taskbook/1",
 "id": "eo-fast-track-packet",
 "title": "E/O Fast Track Packet",
 "subtitle": "Fast-Track Engine Operator and Aerial Clearance · Candidate Packet",
 "org": "Community Volunteer Fire Department",
 "description": "Fast-Track Engine Operator and Aerial Clearance candidate packet: prerequisites, study guide, hydraulics, Day 1 pumper skills #1–#7 and Day 2 aerial (DOA) skills #1–#7, self-check tracker, and reference charts.",
 "version": "2026-11",
 "nameKey": "ov-name",
 "sections": [
  {
   "id": "ov",
   "label": "Candidate packet",
   "cards": [
    {
     "id": "ov-c1",
     "title": "Cover",
     "blocks": [
      {
       "t": "img",
       "src": "books/eo-fast-track/td-patch.jpg",
       "alt": "CVFD Training Division patch",
       "style": "seal"
      },
      {
       "t": "html",
       "html": "<p class=\"kicker\">Community Volunteer Fire Department · Training Division</p><h1 class=\"ctitle\">Fast-Track Engine Operator and Aerial Clearance</h1><p class=\"kicker2\">Candidate Packet</p>"
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
         "label": "Company / station",
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
         "label": "Company officer",
         "type": "text"
        },
        {
         "k": "ov-f3",
         "label": "Lead instructor contact",
         "type": "text"
        }
       ]
      },
      {
       "t": "html",
       "html": "<h3>Evaluation days</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g4",
       "cols": [
        {
         "h": "Date",
         "type": "date"
        },
        {
         "h": "Report time",
         "type": "text"
        },
        {
         "h": "Site",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Day 1: Engine Operator"
        },
        {
         "label": "Day 2: Aerial"
        }
       ],
       "label": "Day"
      },
      {
       "t": "html",
       "html": "<p class=\"hint\">Report time is 0745 both days. Read this packet before your evaluation date. It explains what you will be tested on, how you are scored, and how to prepare. Bring it with you on both days.</p>"
      }
     ]
    },
    {
     "id": "ov-c2",
     "title": "1 · What this program is",
     "blocks": [
      {
       "t": "html",
       "html": "<p>The Fast-Track process lets experienced members show they are ready to ride up as an Engine Operator without completing the full developmental timeline. It is not an entry-level course. You are expected to arrive already knowing the material and able to perform each skill safely.</p><ul><li>Day 1 covers driving and pump operations. Passing it can lead to Engine Operator ride-up clearance.</li><li>Day 2 covers aerial operations. It is a separate aerial clearance and does not change your Engine Operator result.</li><li>Taking part does not guarantee clearance. You must pass every skill, and clearance takes effect only after approval by the Training Division and the Fire Chief or designee.</li><li>After clearance you stay subject to routine performance review, and ride-up status can be removed for safety, policy, or performance concerns.</li></ul><h3>2 · Before you are scheduled</h3><p>You must have all of these before the Training Division schedules you. Check each one and bring proof.</p>"
      },
      {
       "t": "checks",
       "k": "ov-ck5",
       "items": [
        "Released from probation and in good standing",
        "Class B permit or license, and you meet department apparatus-driving requirements",
        "Completed Foundations Task Book, or documented equivalent approved by the Training Division",
        "Recommendation from your company officer",
        "Approval from the Training Division",
        "Pre-course reading, apparatus review, and hydraulic calculation worksheet completed before Day 1",
        "No active driving restriction or medical limitation",
        "Day 2 only: aerial familiarization or equivalent approved by the Training Division"
       ],
       "count": true
      },
      {
       "t": "html",
       "html": "<h3>3 · What to bring</h3>"
      },
      {
       "t": "checks",
       "k": "ov-ck6",
       "items": [
        "This packet",
        "Completed hydraulic calculation worksheet",
        "Driver’s license / Class B permit",
        "Full PPE plus helmet, work gloves, and eye protection",
        "Water bottle and lunch (one-hour lunch break)",
        "Weather-appropriate clothing",
        "Notebook and pen"
       ]
      }
     ]
    },
    {
     "id": "ov-c3",
     "title": "4 · Your two days",
     "blocks": [
      {
       "t": "html",
       "html": "<h3>Day 1: Engine Operator</h3>"
      },
      {
       "t": "table",
       "head": [
        "Time",
        "Block",
        "What happens"
       ],
       "rows": [
        [
         "0745",
         "Report",
         "Sign in, show prerequisite documents"
        ],
        [
         "0800–0830",
         "Orientation and safety",
         "Course rules, PPE, critical failures, your rotation"
        ],
        [
         "0830–0930",
         "Classroom review",
         "Policies, apparatus checks, emergency driving, backing, pump engagement, hydraulics, water supply, pressure control"
        ],
        [
         "0945–1200",
         "Driving evaluations",
         "Pumper #1 to #4. You rotate through all four stations."
        ],
        [
         "1200–1300",
         "Lunch",
         ""
        ],
        [
         "1300–1545",
         "Pump evaluations",
         "Pumper #5, #6 and #7"
        ],
        [
         "1545–1645",
         "Remediation / retest",
         "Coaching and one retest if you had a non-critical deficiency"
        ],
        [
         "1645–1700",
         "Closeout",
         "Debrief, results, signatures"
        ]
       ],
       "widths": [
        16,
        26,
        58
       ]
      },
      {
       "t": "html",
       "html": "<h3>Day 2: Aerial</h3>"
      },
      {
       "t": "table",
       "head": [
        "Time",
        "Block",
        "What happens"
       ],
       "rows": [
        [
         "0745",
         "Report",
         "Sign in"
        ],
        [
         "0800–0830",
         "Orientation and safety",
         "Aerial critical failures, manufacturer limits, your rotation"
        ],
        [
         "0830–0930",
         "Classroom review",
         "Spotting and stabilization, uneven ground, level tolerance, weight restrictions, power lines, hydraulic control, emergency controls, waterway and drain valve, relay to an aerial pump"
        ],
        [
         "0945–1200",
         "Morning chain",
         "Aerial #1, then #4, #3 and #5, from one setup"
        ],
        [
         "1200–1300",
         "Lunch",
         ""
        ],
        [
         "1300–1545",
         "Afternoon chain",
         "Aerial #7, then #6 and #2, from one setup"
        ],
        [
         "1545–1645",
         "Remediation / retest",
         "Coaching and one retest if you had a non-critical deficiency"
        ],
        [
         "1645–1700",
         "Closeout",
         "Debrief, results, signatures"
        ]
       ],
       "widths": [
        16,
        26,
        58
       ]
      },
      {
       "t": "html",
       "html": "<p class=\"hint\">While you wait for your turn, stay in the marked safe zone. Do not help another candidate during a scored attempt.</p>"
      }
     ]
    },
    {
     "id": "ov-c4",
     "title": "5 · How you are scored",
     "blocks": [
      {
       "t": "html",
       "html": "<ul><li>Every skill is scored Pass/Fail on its skill sheet, exactly as written. Every P/F step must pass for the skill to pass.</li><li>Evaluators will not coach you during a scored attempt. They will only stop you if something is unsafe.</li><li>If you miss a non-critical step, you get one coached correction and one retest during the remediation block, when time and apparatus allow.</li><li>A critical failure (section 6) stops the skill immediately. You will be rescheduled for that skill at a future session, not retested the same day.</li><li>Some steps say “verbalize.” Say them out loud so the evaluator hears you. If you don’t say it, it doesn’t count.</li><li>Speed never overrides safety, control, communication, or correct sequence.</li></ul>"
      },
      {
       "t": "table",
       "head": [
        "Result",
        "What it means"
       ],
       "rows": [
        [
         "Cleared",
         "You passed every skill. Ride-up begins once the Training Division and Fire Chief or designee approve."
        ],
        [
         "Not Cleared",
         "You did not pass one or more skills. Your officer and the Training Division will set next steps."
        ],
        [
         "Additional Development Required",
         "You are close. You will get a written plan for what to work on before retesting."
        ]
       ],
       "widths": [
        30,
        70
       ]
      },
      {
       "t": "html",
       "html": "<h3>6 · Critical failures and time standards</h3><p><strong>Any of these stops the skill and fails it:</strong></p><ul><li>Collision or apparatus contact</li><li>Striking a cone or obstruction that counts as a failure (explained at orientation)</li><li>Unsafe backing, including backing without a spotter</li><li>Not wearing a seat belt or other required restraint</li><li>Losing control of the apparatus</li><li>Unsafe pump operation</li></ul><p><strong>Aerial critical failures (Day 2):</strong></p><ul><li>Operating the aerial before stabilization is complete, or when the apparatus is not level</li><li>Raising without verbalizing the overhead hazard and power-line check</li><li>Entering the power-line clearance zone, or touching a structure or obstruction</li><li>The platform touching the roof (Aerial #4)</li><li>Exceeding rated load, wind, or extension limits</li><li>Retracting the ladder with the drain valve closed after flowing water (Aerial #2)</li><li>Moving the aerial with anyone on or under it who is not part of the evolution</li></ul>"
      },
      {
       "t": "table",
       "head": [
        "Skill",
        "Standard"
       ],
       "rows": [
        [
         "Pumper #5 Developing Effective Water Streams",
         "3:00 target"
        ],
        [
         "Pumper #6 Pumper Hook-Up",
         "2:00 target"
        ],
        [
         "Aerial #1 Aerial Ladder Deployment",
         "4:00 limit. Time starts when your feet hit the ground and stops when the ladder is placed at the roof."
        ]
       ],
       "widths": [
        45,
        55
       ]
      }
     ]
    },
    {
     "id": "ov-c5",
     "title": "7 · Guidelines and study guide",
     "blocks": [
      {
       "t": "html",
       "html": "<p><strong>Department guidelines (written test).</strong> You must review every guideline below before your evaluation. You will be tested on them. Mark each one when you have read it, and ask your company officer about anything you don’t understand.</p>"
      },
      {
       "t": "grid",
       "k": "ov-g7",
       "cols": [
        {
         "h": "Date reviewed",
         "type": "date"
        },
        {
         "h": "Initials",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "116 · Rules & Regulations"
        },
        {
         "label": "118 · Requirements and Qualifications"
        },
        {
         "label": "119 · Assignment & Scheduling"
        },
        {
         "label": "201 · Standard of Response"
        },
        {
         "label": "202 · Daily Staffing"
        },
        {
         "label": "203 · Emergency Vehicle Operations"
        },
        {
         "label": "204 · Emergency Vehicle Placement"
        },
        {
         "label": "205 · Road Safety"
        },
        {
         "label": "206 · Ground Guides"
        },
        {
         "label": "208 · Radio Communications"
        },
        {
         "label": "209 · Incident Reporting"
        },
        {
         "label": "211 · Facility Use"
        },
        {
         "label": "216 · Helicopter Landing Zone"
        },
        {
         "label": "227 · Shift Responsibilities"
        },
        {
         "label": "301 · Incident Command"
        },
        {
         "label": "303 · Structure Fire Incidents"
        },
        {
         "label": "304 · High Rise Incidents"
        },
        {
         "label": "305 · Water Supply"
        },
        {
         "label": "306 · iRIT"
        },
        {
         "label": "307 · Rapid Intervention"
        },
        {
         "label": "310 · Accountability"
        },
        {
         "label": "315 · Automatic Fire Alarms"
        },
        {
         "label": "316 · Motor Vehicle Fires"
        },
        {
         "label": "319 · Flammable Liquids Emergencies"
        },
        {
         "label": "320 · Natural and LP Gas"
        },
        {
         "label": "321 · Carbon Monoxide Response"
        }
       ],
       "label": "Guideline",
       "count": 0
      },
      {
       "t": "html",
       "html": "<h3>Study guide</h3><p class=\"hint\">The classroom block is a review, not a first lesson. Be ready to explain and apply each topic.</p><p><strong>Apparatus readiness</strong></p><ul><li>Daily checks and how to document them</li><li>Cab setup, seat belts, mirror adjustment</li><li>Spotter signals and communication</li><li>Situational awareness around the apparatus</li></ul><p><strong>Driving</strong></p><ul><li>Apparatus length, width, height, and weight</li><li>Turning radius and how the rear tracks in a turn</li><li>Backing principles: always with a spotter; stop if you lose sight of them</li><li>Judging clearances; roadway hazards; safe positioning at a scene</li></ul><p><strong>Pump operations</strong></p><ul><li>Engaging the pump in the correct order</li><li>Tank-to-pump operation and switching to an external water source</li><li>Identifying intakes and discharges on your apparatus</li><li>Pressure mode vs RPM mode; safe residual pressure on the intake</li></ul><p><strong>Hydraulics</strong></p><ul><li>Friction loss, appliance loss, elevation pressure</li><li>Nozzle pressures for each nozzle on your apparatus</li><li>Pump discharge pressure calculation</li><li>Relay principles and maintaining pressure</li></ul><p><strong>Abnormal and emergency procedures</strong></p><ul><li>Loss of water supply and what you do first</li><li>Cavitation: how to recognize and correct it</li><li>Pressure fluctuation and equipment malfunction</li><li>What to do after apparatus contact; stop-work authority</li></ul><p><strong>Aerial (Day 2)</strong></p><ul><li>Spotting for reach and stability; checking ground and voids</li><li>Outrigger plates, cribbing, and leveling within tolerance</li><li>Order of brake, PTO, and master power for your apparatus</li><li>Weight restrictions at the tip; wind limits</li><li>Overhead hazards and power-line clearance</li><li>Smooth hydraulic “feathering” control</li><li>Emergency/auxiliary lowering steps for your apparatus</li><li>Ladder pipe water mode, drain valve open/closed, and relay into the aerial intake</li></ul>"
      }
     ]
    },
    {
     "id": "ov-c6",
     "title": "8 · Hydraulics quick reference",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Common training values, with your department’s numbers where known. Department numbers come first.</p><p><strong>Pump discharge pressure: PDP = NP + FL + AL ± EP</strong></p><p>NP = nozzle pressure · FL = friction loss · AL = appliance loss · EP = elevation pressure (add going up, subtract going down)</p><p>Friction loss: FL = C × Q² × L, where Q = flow in hundreds of gpm (gpm ÷ 100) and L = hose length in hundreds of feet (feet ÷ 100)</p>"
      },
      {
       "t": "table",
       "head": [
        "Hose size",
        "Coefficient C (book)",
        "Department value"
       ],
       "rows": [
        [
         "1¾ in",
         "15.5",
         "Combat Ready: 11.7 psi"
        ],
        [
         "2½ in",
         "2",
         "8.15 psi"
        ],
        [
         "3 in Key hose Big 10",
         "0.8 (3 in standard)",
         "3.96 psi"
        ],
        [
         "5 in",
         "0.08",
         "0.08 psi"
        ]
       ]
      },
      {
       "t": "table",
       "head": [
        "Item",
        "Common value",
        "Department value"
       ],
       "rows": [
        [
         "Master stream appliance loss",
         "25–35 psi",
         "25–35 psi"
        ],
        [
         "Appliance loss, flows over 350 gpm (wye, siamese)",
         "10 psi",
         "5–10 psi"
        ],
        [
         "Elevation pressure",
         "5 psi per floor above the first",
         "5 psi per floor above the first"
        ],
        [
         "Minimum intake residual pressure",
         "20 psi",
         "20 psi"
        ]
       ]
      },
      {
       "t": "html",
       "html": "<h3>Our crosslays</h3><p class=\"hint\">All crosslays are 200 ft, level ground. PDP = NP + FL.</p>"
      },
      {
       "t": "table",
       "head": [
        "Line and nozzle",
        "NP",
        "Flow",
        "FL (200 ft)",
        "PDP"
       ],
       "rows": [
        [
         "1¾ in Combat Ready, 15/16 in smooth bore",
         "50 psi",
         "185 gpm",
         "45.1 psi",
         "95 psi"
        ],
        [
         "1¾ in Combat Ready, 7/8 in smooth bore",
         "50 psi",
         "165 gpm",
         "35.9 psi",
         "85 psi"
        ],
        [
         "1¾ in Combat Ready, HEN nozzle",
         "50 psi",
         "185 gpm",
         "45.1 psi",
         "95 psi"
        ],
        [
         "1¾ in Combat Ready, Vortex nozzle",
         "50 psi",
         "185 gpm",
         "45.1 psi",
         "95 psi"
        ],
        [
         "1¾ in Combat Ready, Elkhart brass",
         "50 psi",
         "185 gpm",
         "33.8 psi (150 ft)",
         "84 psi"
        ],
        [
         "1¾ in Combat Ready, Elkhart brass",
         "75 psi",
         "200 gpm",
         "39.5 psi",
         "114.5 psi"
        ],
        [
         "2½ in, 1 3/16 in smooth bore",
         "50 psi",
         "300 gpm",
         "36 psi",
         "86 psi"
        ]
       ],
       "widths": [
        40,
        12,
        14,
        18,
        16
       ]
      },
      {
       "t": "html",
       "html": "<h3>Practice problem</h3><p>Example: 200 ft of 1¾ in Combat Ready with the 15/16 in smooth bore at 50 psi, flowing 185 gpm, level ground.</p><p>Your turn: the 7/8 in smooth bore at 165 gpm, with the line going up two floors (add 10 psi).</p>"
      },
      {
       "t": "fields",
       "cols": "1",
       "fields": [
        {
         "k": "ov-f8",
         "label": "Your answer: PDP =",
         "type": "text",
         "ph": "psi"
        }
       ]
      }
     ]
    },
    {
     "id": "ov-c7",
     "title": "9 · Pumper skills (Day 1)",
     "blocks": [
      {
       "t": "html",
       "html": "<p>These are the seven skills you will be evaluated on. Practice every step exactly as written on the skill sheets in the Day 1 tab.</p>"
      },
      {
       "t": "table",
       "head": [
        "Pumper",
        "Skill",
        "What it tests",
        "Standard"
       ],
       "rows": [
        [
         "#1",
         "Turning a Vehicle Within a Confined Space",
         "180-degree turn, mirror use, clearance judgment",
         "Pass/Fail"
        ],
        [
         "#2",
         "Restricted Horizontal and Vertical Clearances",
         "Knowing your vehicle dimensions; avoiding obstructions",
         "Pass/Fail"
        ],
        [
         "#3",
         "Maneuvering Around Roadway Obstructions",
         "Forward and reverse serpentine control",
         "Pass/Fail"
        ],
        [
         "#4",
         "Backing a Vehicle in Restricted Spaces",
         "Right- and left-side 90-degree backing with a spotter",
         "Pass/Fail"
        ],
        [
         "#5",
         "Developing Effective Water Streams",
         "Pump engagement, two lines, hydraulics, water-source transfer",
         "Pass/Fail; 3:00 target"
        ],
        [
         "#6",
         "Pumper Hook-Up",
         "Relay connection, water supply, communications, pressure",
         "Pass/Fail; 2:00 target"
        ],
        [
         "#7",
         "Apartment Lay",
         "3-in supply, gated wye, two crosslays, source transfer",
         "Pass/Fail"
        ]
       ],
       "widths": [
        9,
        33,
        40,
        18
       ]
      },
      {
       "t": "html",
       "html": "<p><strong>Tips</strong></p><ul><li>Adjust your seat and mirrors before every driving skill.</li><li>Know exactly where your spotter should stand and stop if you lose sight of them.</li><li>Talk through your pump sequence while you do it.</li><li>Do the hydraulics before you charge the line, not after.</li></ul>"
      }
     ]
    },
    {
     "id": "ov-c8",
     "title": "10 · Aerial skills (Day 2) – practice log",
     "blocks": [
      {
       "t": "html",
       "html": "<p>These are the steps on each aerial skill sheet, in the order you will do them on Day 2. Use the Practiced columns to track your practice runs. Every step is scored Pass/Fail on test day.</p><h3>Aerial Skill #1: Aerial Ladder Deployment</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g9",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Acknowledges order to deploy aerial ladder for roof access"
        },
        {
         "label": "Correctly spots apparatus (on stable ground, plenty of clearance, able to reach)"
        },
        {
         "label": "Engages the parking, then the generator PTO, then the Aerial PTO"
        },
        {
         "label": "Verbalizes “Checking for overhead obstructions and power lines”"
        },
        {
         "label": "States clearing traffic before leaving cab (time starts when feet hit the ground)"
        },
        {
         "label": "Sets wheel chocks"
        },
        {
         "label": "Sets plates out in the appropriate place"
        },
        {
         "label": "Switches master power to control outriggers"
        },
        {
         "label": "Safely extends, lowers, and levels outriggers (adjust plates as needed)"
        },
        {
         "label": "Switches master power to ladder mode"
        },
        {
         "label": "Safely climbs to turntable"
        },
        {
         "label": "Verbalizes “checking for overhead obstructions and power lines”"
        },
        {
         "label": "Ensures the ladder is in “rescue” mode (if testing on ladder truck)"
        },
        {
         "label": "Raises, rotates and extends the ladder using smooth hydraulic feathering control"
        },
        {
         "label": "Extends ladder to above objective and lowers ladder into place"
        },
        {
         "label": "Correctly places ladder above to access roof, setting the proper number of rungs (time stops)"
        },
        {
         "label": "Performs evolution in 4 minutes or less"
        },
        {
         "label": "Restows ladder and outriggers and returns truck to normal driving mode"
        }
       ],
       "label": "Task step (scored P/F)"
      },
      {
       "t": "html",
       "html": "<h3>Aerial Skill #2: Aerial Elevated Master Stream</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g10",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Acknowledges order to deploy aerial master stream"
        },
        {
         "label": "Position aerial apparatus for operation."
        },
        {
         "label": "Assess overhead hazards for deployment of aerial device – must verbalize."
        },
        {
         "label": "Engages the parking brake"
        },
        {
         "label": "Ensures ladder pipe is in water mode"
        },
        {
         "label": "Correctly sets up outriggers and raises aerial"
        },
        {
         "label": "Establishes appropriate water supply"
        },
        {
         "label": "Ensures ladder drain valve is closed"
        },
        {
         "label": "Flows master stream"
        },
        {
         "label": "Ensure drain valve is open prior to retracting ladder"
        },
        {
         "label": "Aerial ladder is bedded correctly"
        }
       ],
       "label": "Task step (scored P/F)"
      },
      {
       "t": "html",
       "html": "<h3>Aerial Skill #3: Position Aerial Ladder at Window</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g11",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Position aerial apparatus for operation"
        },
        {
         "label": "Assess overhead hazards for deployment of aerial device – must verbalize"
        },
        {
         "label": "Set parking brake, engage Aerial Master, chock wheel"
        },
        {
         "label": "Verbalize assessment of surface conditions for stabilization purposes."
        },
        {
         "label": "Stabilize apparatus using outriggers"
        },
        {
         "label": "Verbalize weight restrictions while operating aerial device"
        },
        {
         "label": "Elevate, rotate, extend and lower aerial device level with windowsill"
        }
       ],
       "label": "Task step (scored P/F)"
      },
      {
       "t": "html",
       "html": "<h3>Aerial Skill #4: Position Aerial Ladder at Roof</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g12",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Position aerial apparatus for operation."
        },
        {
         "label": "Assess overhead hazards for deployment of aerial device – must verbalize."
        },
        {
         "label": "Set parking brake, engage Aerial Master, chock wheel."
        },
        {
         "label": "Verbalize assessment of surface conditions for stabilization purposes."
        },
        {
         "label": "Stabilize apparatus using outriggers."
        },
        {
         "label": "Elevate, rotate, extend and lower to target area, extended 6 ft above roof."
        },
        {
         "label": "Platform: elevate, rotate, extend and lower platform level with roof (tower/platform only)."
        }
       ],
       "label": "Task step (scored P/F)"
      },
      {
       "t": "html",
       "html": "<h3>Aerial Skill #5: Lowering Ladder Using Emergency Controls</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g13",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Notify Incident Command of situation, loss of apparatus"
        },
        {
         "label": "Demonstrate activation of auxiliary system as per manufacturer recommendations."
        },
        {
         "label": "Rotated and positioned the aerial device to center"
        },
        {
         "label": "Unlocked the aerial device"
        },
        {
         "label": "Retracted the aerial device"
        },
        {
         "label": "Lowered the aerial device"
        },
        {
         "label": "Bedded the aerial device"
        },
        {
         "label": "Stowed stabilization devices"
        },
        {
         "label": "Performed skill in a safe and proficient manner"
        }
       ],
       "label": "Task step (scored P/F)"
      },
      {
       "t": "html",
       "html": "<h3>Aerial Skill #6: Aerial Relay</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g14",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Positioned the aerial to operate at the proper offensive/defensive position"
        },
        {
         "label": "Transferred power from the vehicle engine to pump."
        },
        {
         "label": "Operated aerial pressure control systems"
        },
        {
         "label": "Ensures relay pumper has established a water source"
        },
        {
         "label": "Attaches 5” into aerial intake for pump use"
        },
        {
         "label": "Made the transition between internal (tank) and external (“hydrant”) water sources."
        },
        {
         "label": "Describes benefit between hooking up to driver side intake vs rear intake"
        }
       ],
       "label": "Task step (scored P/F)"
      },
      {
       "t": "html",
       "html": "<h3>Aerial Skill #7: Setting Up Aerial on Uneven Surfaces</h3>"
      },
      {
       "t": "grid",
       "k": "ov-g15",
       "cols": [
        {
         "h": "Practiced 1",
         "type": "check"
        },
        {
         "h": "Practiced 2",
         "type": "check"
        },
        {
         "h": "Notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Scene assessment. Conduct a 360° size-up of the scene. Identify slope, surface type (gravel, asphalt, grass), and potential hazards (manholes, soft ground). Determine best positioning for aerial reach and stability."
        },
        {
         "label": "Positioning the apparatus. Park apparatus facing uphill if possible. Avoid positioning over voids (e.g., basements, culverts). Engage parking brake and place wheel chocks."
        },
        {
         "label": "Deploying outriggers. Extend all outriggers fully unless space constraints dictate otherwise. Use cribbing or pads under outrigger feet to distribute weight. Adjust each outrigger to level the apparatus using onboard indicators."
        },
        {
         "label": "Leveling the apparatus. Use the built-in leveling system (manual or automatic). Ensure the apparatus is within the manufacturer’s specified level tolerance (typically ±5°). Recheck level after initial setup and periodically during operation."
        },
        {
         "label": "Operational readiness check. Confirm all stabilizers are locked and secure. Test aerial movement in all directions. Monitor for shifting or settling during use."
        },
        {
         "label": "Safety considerations. Never operate aerial if apparatus is not level. Avoid sudden movements that could destabilize the unit. Continuously monitor ground conditions, especially in wet or icy weather. Maintain clear communication with all crew members."
        }
       ],
       "label": "Task step (scored P/F)"
      }
     ]
    },
    {
     "id": "ov-c9",
     "title": "11 · Self-check tracker",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Rate yourself after each practice session: 1 = need help, 2 = can do with prompts, 3 = can do it to standard every time. Aim for all 3s before your evaluation date.</p>"
      },
      {
       "t": "grid",
       "k": "ov-g16",
       "cols": [
        {
         "h": "Practice date",
         "type": "date"
        },
        {
         "h": "Rating",
         "type": "choice",
         "opts": [
          "1",
          "2",
          "3"
         ]
        },
        {
         "h": "Practice date",
         "type": "date"
        },
        {
         "h": "Rating",
         "type": "choice",
         "opts": [
          "1",
          "2",
          "3"
         ]
        },
        {
         "h": "Practice date",
         "type": "date"
        },
        {
         "h": "Rating",
         "type": "choice",
         "opts": [
          "1",
          "2",
          "3"
         ]
        },
        {
         "h": "Who watched / notes",
         "type": "text"
        }
       ],
       "rows": [
        {
         "label": "Pumper #1 Confined turn"
        },
        {
         "label": "Pumper #2 Clearances"
        },
        {
         "label": "Pumper #3 Serpentine"
        },
        {
         "label": "Pumper #4 Backing"
        },
        {
         "label": "Pumper #5 Water streams (3:00)"
        },
        {
         "label": "Pumper #6 Pumper hook-up (2:00)"
        },
        {
         "label": "Pumper #7 Apartment lay"
        },
        {
         "label": "Aerial #1 Deployment (4:00)"
        },
        {
         "label": "Aerial #2 Master stream"
        },
        {
         "label": "Aerial #3 Window"
        },
        {
         "label": "Aerial #4 Roof"
        },
        {
         "label": "Aerial #5 Emergency lowering"
        },
        {
         "label": "Aerial #6 Aerial relay"
        },
        {
         "label": "Aerial #7 Uneven surfaces"
        },
        {
         "label": "Hydraulics worksheet"
        }
       ],
       "label": "Skill"
      }
     ]
    },
    {
     "id": "ov-c10",
     "title": "12 · Candidate acknowledgment",
     "blocks": [
      {
       "t": "html",
       "html": "<p>Sign and hand this page to the lead instructor at sign-in on Day 1.</p>"
      },
      {
       "t": "checks",
       "k": "ov-ck17",
       "items": [
        "I meet every prerequisite in section 2 and have brought proof.",
        "I have read how I will be scored and what counts as a critical failure.",
        "I understand that evaluators will not coach me during a scored attempt.",
        "I understand that taking part does not guarantee clearance, and that clearance takes effect only after Training Division and Fire Chief approval.",
        "I will stop immediately if an evaluator or the safety officer calls stop.",
        "I have no driving restriction or medical limitation that prevents safe participation."
       ],
       "count": true
      },
      {
       "t": "grid",
       "k": "ov-g18",
       "cols": [
        {
         "h": "Name",
         "type": "text"
        },
        {
         "h": "Signature",
         "type": "sig"
        },
        {
         "h": "Date",
         "type": "date"
        }
       ],
       "rows": [
        {
         "label": "Candidate"
        },
        {
         "label": "Company officer"
        },
        {
         "label": "Lead instructor"
        }
       ],
       "label": "",
       "count": 1
      }
     ]
    }
   ]
  },
  {
   "id": "d1",
   "label": "Day 1 · Pumper",
   "cards": [
    {
     "id": "d1-c1",
     "title": "Pumper Skill #1 – Turning Vehicle Within a Confined Space",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps1",
       "desc": [
        "<strong>Instructions:</strong> The firefighter shall perform the following evolution in a safe manner, using the proper PPE (helmet, work gloves, eye protection, etc.) as necessary.",
        "<strong>Section 1:</strong> The candidate shall turn a fire apparatus 180 degrees within a confined space, in an area in which the vehicle cannot perform a U-turn without stopping and backing up, so that the vehicle is turned 180 degrees without striking obstructions within the given space."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Pumping apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Wore seat belt and assured all passengers were secure."
        },
        {
         "t": "step",
         "html": "Turned vehicle 180 degrees within the confined space"
        },
        {
         "t": "step",
         "html": "Did not strike an obstruction"
        },
        {
         "t": "step",
         "html": "Correctly used mirrors"
        },
        {
         "t": "step",
         "html": "Correctly judged vehicle clearance"
        },
        {
         "t": "step",
         "html": "Entered and exited the confined space without striking obstacles"
        },
        {
         "t": "step",
         "html": "Performed skill in a safe and proficient manner"
        }
       ]
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/skill-diagram-p20.jpg",
       "alt": "Confined-space turn course: 50 ft (15.24 m) wide by 100 ft (30.5 m) long, 12 ft (3.7 m) entry",
       "style": "diagram"
      }
     ],
     "standard": true
    },
    {
     "id": "d1-c2",
     "title": "Pumper Skill #2 – Restricted Horizontal and Vertical Clearances",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps2",
       "desc": [
        "<strong>Objective:</strong> Maneuver a fire apparatus in areas with restricted horizontal and vertical clearances, given a fire apparatus and a course that requires the operator to move through areas of restricted horizontal and vertical clearances, so that the operator accurately judges the ability of the vehicle to pass through the openings and so that no obstructions are struck.",
        "<strong>Instructions:</strong> Given a pumping apparatus and a specified course with horizontal and vertical clearances, the Driver/Operator-Pumper candidate shall maneuver a pumping apparatus so that the Driver/Operator-Pumper candidate accurately judges the ability of the vehicle to pass through the openings and so that no obstructions are struck."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Pumping apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Wore seat belt and assured all passengers were secure."
        },
        {
         "t": "step",
         "html": "Drove vehicle through required course"
        },
        {
         "t": "step",
         "html": "Did not strike an obstruction"
        },
        {
         "t": "step",
         "html": "Correctly used mirrors"
        },
        {
         "t": "step",
         "html": "Correctly judged vehicle clearance"
        },
        {
         "t": "step",
         "html": "Performed skill in a safe and proficient manner"
        }
       ]
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/skill-diagram-p21.jpg",
       "alt": "Clearance course: 8 ft 2 in (2.5 m) entry, 9 ft 6 in (2.9 m) exit, 50 ft and 75 ft sections",
       "style": "diagram"
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Beginning and end measurements can be adjusted to CVFD pumper and aerial apparatus width, length, and height.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "d1-c3",
     "title": "Pumper Skill #3 – Maneuvering Around Roadway Obstructions",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps3",
       "desc": [
        "<strong>Objective:</strong> Maneuver a vehicle around obstructions on a roadway while moving forward and in reverse, given a fire department apparatus, a spotter where the spotter assists the driver in performing the maneuver, and a roadway with obstructions, so that the vehicle is maneuvered through the obstructions without stopping to change the direction of travel and without striking the obstructions.",
        "<strong>Instructions:</strong> Given a pumping apparatus and a spotter for backing, the Driver/Operator-Pumper candidate shall maneuver a vehicle around obstructions on a roadway while moving forward and in reverse, so that the vehicle is maneuvered through the obstructions without stopping to change the direction of travel and without striking the obstructions."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Pumping apparatus and spotter"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Wore seat belt and assured all passengers were secure."
        },
        {
         "t": "step",
         "html": "Maneuvered the vehicle around obstructions while moving backward"
        },
        {
         "t": "step",
         "html": "Maneuvered the vehicle around obstructions while moving forward"
        },
        {
         "t": "step",
         "html": "Did not stop to change the direction of travel"
        },
        {
         "t": "step",
         "html": "Did not strike an obstruction"
        },
        {
         "t": "step",
         "html": "Correctly used mirrors"
        },
        {
         "t": "step",
         "html": "Accurately judged vehicle clearance"
        },
        {
         "t": "step",
         "html": "Performed skill in a safe and proficient manner"
        }
       ]
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/skill-diagram-p22.jpg",
       "alt": "Serpentine course: obstructions 30 to 38 ft (9 to 12 m) apart based on vehicle wheelbase",
       "style": "diagram"
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Measurements can be adjusted to fit CVFD engines and aerials based on spec wheelbase.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "d1-c4",
     "title": "Pumper Skill #4 – Backing Vehicle in Restricted Spaces",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps4",
       "desc": [
        "<strong>Objective:</strong> Maneuver a vehicle around obstructions on a roadway while moving forward and in reverse, given a fire department apparatus, a spotter where the spotter assists the driver in performing the maneuver, and a roadway with obstructions, so that the vehicle is maneuvered through the obstructions without stopping to change the direction of travel and without striking the obstructions.",
        "<strong>Instructions:</strong> Given a pumping apparatus and a spotter, the Driver/Operator-Pumper candidate shall back an apparatus from a roadway into restricted spaces on both the right and left sides of the vehicle, into a restricted space 12 ft (3.7 m) in width, requiring 90-degree right-hand and left-hand turns from the roadway, so that the vehicle is parked within the restricted areas without having to stop and pull forward and without striking obstructions."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Pumping apparatus and spotter"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Wore seat belt and assured all passengers were secure."
        },
        {
         "t": "step",
         "html": "Backed the apparatus from a roadway into space using a 90-degree left-hand turn."
        },
        {
         "t": "step",
         "html": "Backed the apparatus from a roadway into space using a 90-degree right-hand turn."
        },
        {
         "t": "step",
         "html": "Correctly used mirrors"
        },
        {
         "t": "step",
         "html": "Correctly judged vehicle clearance"
        },
        {
         "t": "step",
         "html": "Parked within the restricted area without having to stop and pull forward"
        },
        {
         "t": "step",
         "html": "Parked within the restricted area without striking an obstruction"
        },
        {
         "t": "step",
         "html": "Performed skill in a safe and proficient manner"
        }
       ]
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/skill-diagram-p24.jpg",
       "alt": "90-degree backing turn required into a 12 ft (3.7 m) by 20 ft (6.1 m) space from a 40 ft (12.2 m) roadway; a three-point turn is not allowed",
       "style": "diagram"
      },
      {
       "t": "html",
       "html": "<p class=\"fine\">Beginning and end measurements can be adjusted to CVFD pumper and aerial apparatus width, length, and height.</p>"
      }
     ],
     "standard": true
    },
    {
     "id": "d1-c5",
     "title": "Pumper Skill #5 – Developing Effective Water Streams",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps5",
       "desc": [
        "<strong>Objective:</strong> Pump two pre-connect lines to the 1st and 2nd floor.",
        "<strong>Note:</strong> This performance standard is not to be performed until after a Class B permit is obtained."
       ],
       "chips": [
        [
         "Time limit",
         "3:00 minutes"
        ]
       ],
       "steps": [
        {
         "t": "sub",
         "html": "Place the pump into service for pumping operations"
        },
        {
         "t": "step",
         "html": "Acknowledge order to pump two preconnected lines upon “arrival”"
        },
        {
         "t": "step",
         "html": "Place the transmission into neutral, pull the parking brake and allow the engine to reach idle speed"
        },
        {
         "t": "step",
         "html": "Depress brake pedal and engage pump shift lever/switch"
        },
        {
         "t": "step",
         "html": "Shift transmission into pump gear; confirm proper engagement (in ‘Drive’ or ‘Neutral’ dependent on engine)"
        },
        {
         "t": "info",
         "html": "FF exits cab (time starts once FF exits cab)"
        },
        {
         "t": "step",
         "html": "Open water tank pump valve crack"
        },
        {
         "t": "info",
         "html": "Open recirculator (tank fill) valve"
        },
        {
         "t": "sub",
         "html": "Pump 2 pre-connect lines to the 1st and 2nd floor using tank water"
        },
        {
         "t": "step",
         "html": "Open correct discharge valve"
        },
        {
         "t": "step",
         "html": "Adjust throttle to correct discharge pressure"
        },
        {
         "t": "step",
         "html": "Maintain correct discharge pressure"
        },
        {
         "t": "step",
         "html": "Verify desired GPM flow is achieved; adjust as necessary"
        },
        {
         "t": "sub",
         "html": "Water source transfer"
        },
        {
         "t": "step",
         "html": "Connect soft suction and hydrant valve"
        },
        {
         "t": "step",
         "html": "Turns on hydrant fully"
        },
        {
         "t": "step",
         "html": "Ensure intake valve is completely open and bleeds air"
        },
        {
         "t": "step",
         "html": "Maintain constant discharge pressure (±30 psi) during changeover"
        },
        {
         "t": "step",
         "html": "Fill apparatus tank"
        },
        {
         "t": "step",
         "html": "Close water tank to pump/tank fill valve (time stops)"
        },
        {
         "t": "step",
         "html": "Identify the number of equal lines or additional GPM that can be added"
        },
        {
         "t": "step",
         "html": "Pump the correct pressure on a 1.75” hose line with: TFT Vortex nozzle; Elkhart fog; Elkhart smooth bore 15/16"
        },
        {
         "t": "step",
         "html": "Pump the correct pressure on a 2.5” hose line with an Elkhart smooth bore 1 3/16”",
         "hl": true
        },
        {
         "t": "step",
         "html": "Pump the correct pressure on a deck gun"
        },
        {
         "t": "step",
         "html": "State the correct PDP on a given length of 5” hose (relay) and 3” hose (apartment lay)"
        },
        {
         "t": "step",
         "html": "State the “safe residual” and where to read it on the pump panel",
         "hl": true
        },
        {
         "t": "step",
         "html": "Identify all intakes and discharges and their respective controls"
        },
        {
         "t": "step",
         "html": "Explain the difference between RPM and pressure modes and how to engage each"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "d1-c6",
     "title": "Pumper Skill #6 – Pumper Hook-Up",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps6",
       "desc": [
        "<strong>Objective:</strong> Pump a supply line of 2.5” or larger, given a relay pumping evolution, the length and size of the line, and the desired flow and intake pressure, so that the correct pressure and flow are provided to the next pumper in the relay."
       ],
       "chips": [
        [
         "Time limit",
         "2 minutes"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Acknowledges order to relay"
        },
        {
         "t": "step",
         "html": "Correctly spots the apparatus"
        },
        {
         "t": "step",
         "html": "Engages the parking brake"
        },
        {
         "t": "step",
         "html": "Engages pumper into pump gear"
        },
        {
         "t": "step",
         "html": "Clears traffic before leaving cab (“clearing traffic”)"
        },
        {
         "t": "step",
         "html": "Connects soft suction hose to intake and stretches hose to hydrant"
        },
        {
         "t": "step",
         "html": "Radios to attack pumper to cut off water supply"
        },
        {
         "t": "step",
         "html": "Turns off hydrant, disconnects hose, connects soft suction (time starts)"
        },
        {
         "t": "step",
         "html": "Turns on hydrant fully"
        },
        {
         "t": "step",
         "html": "Connect hose to pumper discharge",
         "hl": true
        },
        {
         "t": "step",
         "html": "Open intake valve"
        },
        {
         "t": "step",
         "html": "Open discharge valve (time stops)",
         "hl": true
        },
        {
         "t": "info",
         "html": "Establishes desired pressure"
        },
        {
         "t": "info",
         "html": "Removes kinks and slack"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "d1-c7",
     "title": "Pumper Skill #7 – Apartment Lay",
     "blocks": [
      {
       "t": "ps",
       "k": "d1-ps7",
       "desc": [
        "<strong>Instructions:</strong> Pump an apartment lay using 3-inch hose line along with a gated wye and 2 preconnected crosslays that will be disconnected and attached to the gated wye. One hoseline will be on the 1st floor and the second hoseline will be on the 2nd floor."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ]
       ],
       "steps": [
        {
         "t": "sub",
         "html": "Place the pump into service for pumping operations"
        },
        {
         "t": "step",
         "html": "Place the transmission into neutral, pull the parking brake and allow the engine to reach idle speed"
        },
        {
         "t": "step",
         "html": "Engage pump shift lever/switch"
        },
        {
         "t": "step",
         "html": "Shift transmission into pump gear; confirm proper engagement"
        },
        {
         "t": "step",
         "html": "Open water tank pump valve and crack recirculator (tank fill) valve"
        },
        {
         "t": "sub",
         "html": "Pump apartment lay with wye and 2 crosslays"
        },
        {
         "t": "step",
         "html": "Attaches correct length of 3” with gated wye to correct discharge"
        },
        {
         "t": "step",
         "html": "Disconnects 2 preconnected crosslays and attaches to gated wye"
        },
        {
         "t": "step",
         "html": "Charges correct discharge and pumps correct PDP to 3” and to the crosslays"
        },
        {
         "t": "step",
         "html": "Maintains correct PDP",
         "hl": true
        },
        {
         "t": "sub",
         "html": "Water source transfer"
        },
        {
         "t": "step",
         "html": "Connects 5” into intake and then to hydrant",
         "hl": true
        },
        {
         "t": "step",
         "html": "Turns on hydrant fully"
        },
        {
         "t": "step",
         "html": "Ensure intake valve is completely open and bleeds air"
        },
        {
         "t": "step",
         "html": "Fills apparatus tank"
        },
        {
         "t": "step",
         "html": "Closes tank to pump"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    }
   ],
   "submit": true
  },
  {
   "id": "d2",
   "label": "Day 2 · Aerial",
   "cards": [
    {
     "id": "d2-c1",
     "title": "Aerial (DOA) Skill #1 – Aerial Ladder Deployment",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps1",
       "desc": [
        "<strong>Objective:</strong> Maneuver and position an aerial apparatus so that it is properly positioned for safe aerial deployment."
       ],
       "chips": [
        [
         "Time limit",
         "4:00 minutes"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Acknowledges order to deploy aerial ladder for roof access"
        },
        {
         "t": "step",
         "html": "Correctly spots apparatus (on stable ground, plenty of clearance, able to reach)"
        },
        {
         "t": "step",
         "html": "Engages the parking, then the generator PTO, then the Aerial PTO"
        },
        {
         "t": "step",
         "html": "Verbalizes “Checking for overhead obstructions and power lines”"
        },
        {
         "t": "step",
         "html": "States clearing traffic before leaving cab (time starts when feet hit the ground)"
        },
        {
         "t": "step",
         "html": "Sets wheel chocks"
        },
        {
         "t": "step",
         "html": "Sets plates out in the appropriate place"
        },
        {
         "t": "step",
         "html": "Switches master power to control outriggers"
        },
        {
         "t": "step",
         "html": "Safely extends, lowers, and levels outriggers (adjust plates as needed)"
        },
        {
         "t": "step",
         "html": "Switches master power to ladder mode"
        },
        {
         "t": "step",
         "html": "Safely climbs to turntable"
        },
        {
         "t": "step",
         "html": "Verbalizes “checking for overhead obstructions and power lines”",
         "hl": true
        },
        {
         "t": "step",
         "html": "Ensures the ladder is in “rescue” mode (if testing on ladder truck)"
        },
        {
         "t": "step",
         "html": "Raises, rotates and extends the ladder using smooth hydraulic feathering control",
         "hl": true
        },
        {
         "t": "step",
         "html": "Extends ladder to above objective and lowers ladder into place"
        },
        {
         "t": "step",
         "html": "Correctly places ladder above to access roof, setting the proper number of rungs (time stops)"
        },
        {
         "t": "step",
         "html": "Performs evolution in 4 minutes or less"
        },
        {
         "t": "step",
         "html": "Restows ladder and outriggers and returns truck to normal driving mode"
        }
       ]
      }
     ],
     "standard": true
    },
    {
     "id": "d2-c2",
     "title": "Aerial (DOA) Skill #2 – Aerial Elevated Master Stream",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps2",
       "desc": [
        "<strong>Instructions:</strong> The firefighter shall perform the following evolution in a safe manner, using the proper PPE (helmet, work gloves, eye protection, etc.) as necessary.",
        "<strong>Section 1:</strong> Maneuver and position an aerial apparatus so that the apparatus is positioned for correct aerial master stream deployment."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Acknowledges order to deploy aerial master stream"
        },
        {
         "t": "step",
         "html": "Position aerial apparatus for operation."
        },
        {
         "t": "step",
         "html": "Assess overhead hazards for deployment of aerial device – must verbalize."
        },
        {
         "t": "step",
         "html": "Engages the parking brake"
        },
        {
         "t": "step",
         "html": "Ensures ladder pipe is in water mode"
        },
        {
         "t": "step",
         "html": "Correctly sets up outriggers and raises aerial"
        },
        {
         "t": "step",
         "html": "Establishes appropriate water supply"
        },
        {
         "t": "step",
         "html": "Ensures ladder drain valve is closed"
        },
        {
         "t": "step",
         "html": "Flows master stream"
        },
        {
         "t": "step",
         "html": "Ensure drain valve is open prior to retracting ladder",
         "hl": true
        },
        {
         "t": "step",
         "html": "Aerial ladder is bedded correctly"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "d2-c3",
     "title": "Aerial (DOA) Skill #3 – Position Aerial Ladder at Window",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps3",
       "desc": [
        "<strong>Instructions:</strong> The firefighter shall perform the following evolution in a safe manner, using the proper PPE (helmet, work gloves, eye protection, etc.) as necessary.",
        "<strong>Section 1:</strong> Maneuver and position an aerial apparatus so that the apparatus is positioned for correct aerial device deployment at a window."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Position aerial apparatus for operation"
        },
        {
         "t": "step",
         "html": "Assess overhead hazards for deployment of aerial device – must verbalize"
        },
        {
         "t": "step",
         "html": "Set parking brake, engage Aerial Master, chock wheel"
        },
        {
         "t": "step",
         "html": "Verbalize assessment of surface conditions for stabilization purposes."
        },
        {
         "t": "step",
         "html": "Stabilize apparatus using outriggers"
        },
        {
         "t": "step",
         "html": "Verbalize weight restrictions while operating aerial device"
        },
        {
         "t": "step",
         "html": "Elevate, rotate, extend and lower aerial device level with windowsill"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "d2-c4",
     "title": "Aerial (DOA) Skill #4 – Position Aerial Ladder at Roof",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps4",
       "desc": [
        "<strong>Instructions:</strong> The firefighter shall perform the following evolution in a safe manner.",
        "<strong>Section 1:</strong> Maneuver and position an aerial apparatus so that the apparatus is positioned for correct aerial device deployment for roof operations."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Position aerial apparatus for operation."
        },
        {
         "t": "step",
         "html": "Assess overhead hazards for deployment of aerial device – must verbalize."
        },
        {
         "t": "step",
         "html": "Set parking brake, engage Aerial Master, chock wheel."
        },
        {
         "t": "step",
         "html": "Verbalize assessment of surface conditions for stabilization purposes."
        },
        {
         "t": "step",
         "html": "Stabilize apparatus using outriggers."
        },
        {
         "t": "step",
         "html": "Elevate, rotate, extend and lower to target area, extended 6 ft above roof."
        },
        {
         "t": "step",
         "html": "Platform: elevate, rotate, extend and lower platform level with roof (tower/platform only)."
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "d2-c5",
     "title": "Aerial (DOA) Skill #5 – Lowering Ladder Using Emergency Controls",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps5",
       "desc": [
        "<strong>Objective:</strong> Lower an aerial device using the emergency operating system, given an aerial device, so that the aerial device is lowered to its bedded position."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "sub",
         "html": "Using the emergency operating system the candidate will perform the following steps:"
        },
        {
         "t": "step",
         "html": "Notify Incident Command of situation, loss of apparatus"
        },
        {
         "t": "step",
         "html": "Demonstrate activation of auxiliary system as per manufacturer recommendations."
        },
        {
         "t": "step",
         "html": "Rotated and positioned the aerial device to center"
        },
        {
         "t": "step",
         "html": "Unlocked the aerial device"
        },
        {
         "t": "step",
         "html": "Retracted the aerial device"
        },
        {
         "t": "step",
         "html": "Lowered the aerial device"
        },
        {
         "t": "step",
         "html": "Bedded the aerial device"
        },
        {
         "t": "step",
         "html": "Stowed stabilization devices"
        },
        {
         "t": "step",
         "html": "Performed skill in a safe and proficient manner"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "d2-c6",
     "title": "Aerial (DOA) Skill #6 – Aerial Relay",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps6",
       "desc": [
        "<strong>Objective:</strong> Pump a supply line of 5 in, given a relay pumping evolution, the length and size of the line, and the desired flow and intake pressure, so that the correct pressure and flow are provided to the next pumper in the relay."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "Positioned the aerial to operate at the proper offensive/defensive position"
        },
        {
         "t": "step",
         "html": "Transferred power from the vehicle engine to pump."
        },
        {
         "t": "step",
         "html": "Operated aerial pressure control systems"
        },
        {
         "t": "step",
         "html": "Ensures relay pumper has established a water source"
        },
        {
         "t": "step",
         "html": "Attaches 5” into aerial intake for pump use"
        },
        {
         "t": "step",
         "html": "Made the transition between internal (tank) and external (“hydrant”) water sources."
        },
        {
         "t": "step",
         "html": "Describes benefit between hooking up to driver side intake vs rear intake"
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    },
    {
     "id": "d2-c7",
     "title": "Aerial (DOA) Skill #7 – Setting Up Aerial on Uneven Surfaces",
     "blocks": [
      {
       "t": "ps",
       "k": "d2-ps7",
       "desc": [
        "<strong>Objective:</strong> Safely and effectively stabilize and deploy an aerial apparatus on uneven terrain to support firefighting, rescue, or other emergency operations."
       ],
       "chips": [
        [
         "Time limit",
         "None"
        ],
        [
         "Equipment",
         "Aerial apparatus"
        ]
       ],
       "steps": [
        {
         "t": "step",
         "html": "<strong>Scene assessment.</strong> Conduct a 360° size-up of the scene. Identify slope, surface type (gravel, asphalt, grass), and potential hazards (manholes, soft ground). Determine best positioning for aerial reach and stability."
        },
        {
         "t": "step",
         "html": "<strong>Positioning the apparatus.</strong> Park apparatus facing uphill if possible. Avoid positioning over voids (e.g., basements, culverts). Engage parking brake and place wheel chocks."
        },
        {
         "t": "step",
         "html": "<strong>Deploying outriggers.</strong> Extend all outriggers fully unless space constraints dictate otherwise. Use cribbing or pads under outrigger feet to distribute weight. Adjust each outrigger to level the apparatus using onboard indicators."
        },
        {
         "t": "step",
         "html": "<strong>Leveling the apparatus.</strong> Use the built-in leveling system (manual or automatic). Ensure the apparatus is within the manufacturer’s specified level tolerance (typically ±5°). Recheck level after initial setup and periodically during operation."
        },
        {
         "t": "step",
         "html": "<strong>Operational readiness check.</strong> Confirm all stabilizers are locked and secure. Test aerial movement in all directions. Monitor for shifting or settling during use."
        },
        {
         "t": "step",
         "html": "<strong>Safety considerations.</strong> Never operate aerial if apparatus is not level. Avoid sudden movements that could destabilize the unit. Continuously monitor ground conditions, especially in wet or icy weather. Maintain clear communication with all crew members."
        }
       ],
       "noTime": true
      }
     ],
     "standard": true
    }
   ],
   "submit": true
  },
  {
   "id": "ref",
   "label": "Reference charts",
   "cards": [
    {
     "id": "ref-c1",
     "title": "CVFD friction loss chart and reference tables",
     "blocks": [
      {
       "t": "html",
       "html": "<p class=\"hint\">Department reference charts: friction loss by hose size and manufacturer, handline and master stream tips, appliance loss, Blitzfire, nozzle pressures, hydrant main sizes, flow available from a hydrant, high-rise operations, nozzle colors, and crosslays.</p>"
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/reference-p36.jpg",
       "alt": "CVFD friction loss chart, page 1",
       "style": "page"
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/reference-p37.jpg",
       "alt": "CVFD friction loss chart, page 2",
       "style": "page"
      },
      {
       "t": "img",
       "src": "books/eo-fast-track/reference-p38.jpg",
       "alt": "CVFD friction loss chart, page 3",
       "style": "page"
      }
     ]
    }
   ]
  }
 ]
};
