/* ============================================================
   DEPARTMENT OF AIR WARFARE HALL OF FAME — kiosk content
   Armed Forces Command and Staff College, Jaji.
   Every name, date and biography the kiosk shows lives here, so the
   rolls can be corrected or extended without touching the app code.

   Dates are ISO (YYYY-MM-DD). Use null for a date not yet known.
   "current: true" marks the serving office holder (none is set yet).
   ============================================================ */

var HOF_CONTENT = {

  ui: {
    appTitle: 'Our Leaders',
    appKicker: 'Department of Air Warfare · AFCSC Jaji',
    college: 'Armed Forces Command and Staff College',
    collegeShort: 'AFCSC Jaji',
    department: 'Department of Air Warfare',
    hallOfFame: 'Hall of Fame',
    tagline: 'Honouring those who led the College and the Department',
    touchToBegin: 'Touch to begin',

    navCommandants: 'Commandants',
    navDirectors: 'Directors',
    menuCommandants: 'Commandants of the College',
    menuCommandantsSub: 'The officers who have led the Armed Forces Command and Staff College',
    menuDirectors: 'Directors of Air Warfare',
    menuDirectorsSub: 'Every head of the Department, from the Air Faculty to Air Warfare',

    commandantsTitle: 'Commandants of the College',
    directorsTitle: 'Directors of Air Warfare',
    commandant: 'Commandant',
    director: 'Director',
    of: 'of',
    current: 'Serving',
    present: 'Present',
    tbc: '-',
    tenure: 'Tenure',
    duration: 'Duration',
    appointment: 'Appointment',
    service: 'Service',
    serviceNo: 'Service No.',
    precededBy: 'Preceded by',
    succeededBy: 'Succeeded by',
    readBiography: 'Read biography',
    biography: 'Biography',
    alsoDirector: 'Also served as Director',
    alsoCommandant: 'Later Commandant',
    all: 'All',
    tapPortrait: 'Tap a portrait to learn more',
    succession: 'Line of succession',
    back: 'Back',
    portraitPending: 'Portrait to follow',
    bioPending: 'Biography to follow.',
    idleReturnNote: 'Returning to the welcome screen…'
  },

  /* ----------------------------------------------------------
     ERAS OF THE DEPARTMENT — the head of the department was styled
     Director Air Faculty until February 2004, and Director Air
     Warfare from then on (as printed on the portraits).
     ---------------------------------------------------------- */
  eras: [
    { id: 'faculty', label: 'Air Faculty', title: 'Director Air Faculty' },
    { id: 'warfare', label: 'Air Warfare', title: 'Director Air Warfare' }
  ],

  /* ----------------------------------------------------------
     DIRECTORS — oldest first.
     Source: the caption printed on each portrait in the scanned PDF of
     directors' portraits ("CamScanner 03-11-2026 12.56.pdf", one per page).
     fullName and bio: "BRIEF BIOGRAPHIES OF PAST D DAWS.pptx"
     (one slide each, in the deck's own words; fullName is the rank and name
     as the deck gives them).
     ---------------------------------------------------------- */
  directors: [
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'U Mu’azu', post: 'FSS psc', era: 'faculty', from: '1978-04-03', to: '1979-09-25', photo: 'assets/directors/01-gp-capt-u-muazu.jpg',
      fullName: "Air Vice-Marshal Usman Mu’azu",
      bio: [
        "Air Vice-Marshal Usman Mu’azu (1942–2008) was a distinguished senior Nigerian Air Force officer and military administrator. Born in Kwoi, Kaduna State, he studied at Provincial Secondary School, Zaria, Ahmadu Bello University, and the Nigerian Defence Academy, completing advanced professional training in West Germany and the United States.",
        "Throughout his career, Mu'azu held prominent positions, including roles at the Command and Staff College, Jaji, where he served as Director of the Department of Air Warfare, as well as leading the Command Training College in Kaduna, Nigerian Airways, and serving as Air Officer Commanding, Nigerian Air Force Training Command.",
        "Following the December 1983 military coup, he served as the Military Governor of Kaduna State from January 1984 until August 1985, prior to the regime change that brought General Ibrahim Babangida to power. He subsequently returned to active service in the Nigerian Air Force until his retirement, leaving behind a lasting legacy in Nigeria's military and political history before his passing in 2008."
      ]
    },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'GO Esho', post: 'FSS psc', era: 'faculty', from: '1979-09-24', to: '1981-01-05', photo: 'assets/directors/02-gp-capt-go-esho.jpg',
      fullName: "Air Vice-Marshal George Ayo Osho",
      bio: [
        "Air Vice Marshal George Ayo Osho was born on 4 December 1939 in Mopa, Kogi State. He joined the NAF as a pioneer officer cadet in 1963 after training in West Germany. He passed away on 13 October 2018 at the age of 78.",
        "Air Vice Marshal GA Osho served as the Director of the Air Faculty, AFCSC, Jaji, during the late 1970s / early 1980s, where he adapted post-Civil War tactical frameworks into advanced joint-services training.",
        "The very senior officer was recognized as one of Nigeria’s first 2 presidential pilots on the Executive Fleet and the first NAF pilot to record 6,000 flying hours. He was also the first NAF officer to graduate from the Defence Services Staff College in Wellington, India.",
        "He served as the Air Officer Commanding, Tactical Air Command Makurdi, and held an extensive tenure as Air Officer Operations, HQ NAF (1983–1989). He also briefly served as the Acting Military Governor of Lagos State for 6 months in 1977."
      ]
    },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'CU Ugah', post: 'FSS psc', era: 'faculty', from: '1981-02-08', to: '1982-02-08', photo: 'assets/directors/03-gp-capt-cu-ugah.jpg',
      fullName: "Air Vice Marshal CU Ugah",
      bio: [
        "Air Vice Marshal CU Ugah served as Director Department of Air Warfare, Armed Forces Command and Staff College (AFCSC), Jaji. He also served as Air Officer Commanding, Tactical Air Command, Makurdi from 10 January 1989 to 29 December 1989, under the military administration of General Ibrahim Babangida."
      ]
    },
    /* The portrait reads "8 Feb 81 - 1 Dec 82"; 81 looks like a slip for 82,
       as Gp Capt Ugah held the post until 8 Feb 82. To be confirmed. */
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'S Magaji', post: 'FSS psc', era: 'faculty', from: '1982-02-08', to: '1982-12-01', photo: 'assets/directors/04-gp-capt-s-magaji.jpg',
      fullName: "Air Vice Marshal S Magaji",
      bio: [
        "Air Vice Marshal S Magaji was among the early generation of officers integrated into the Nigerian Air Force structure during its foundational post-independence decade, establishing a long-standing military career. He served as the Director, Department of Air Warfare at the Armed Forces Command and Staff College, Jaji."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AH Lawal', post: 'FSS psc mni', era: 'faculty', from: '1982-12-01', to: '1984-01-20', photo: 'assets/directors/05-air-cdre-ah-lawal.jpg',
      fullName: "Air Vice Marshal Adebayo Hamed Lawal",
      bio: [
        "Air Vice Marshal Adebayo Hamed Lawal was born in Offa, Kwara State on 14 September 1941 and educated at Government College, Ibadan. He joined the Nigerian Air Force in 1963 as a pioneer intake, completing military pilot training in West Germany in 1964.",
        "The very senior officer played an instrumental tactical role during the Nigerian Civil War by maintaining the operational readiness of NAF's MiG-17 fighter jets against adversary air strikes.",
        "He served as Base Commander in Port Harcourt, Enugu, and Kano before becoming the Air Officer Commanding, Tactical Air Command, Makurdi (1977–1978). He also enhanced advanced airpower training as the Director of the Air Faculty at AFCSC, Jaji.",
        "Air Vice Marshal AH Lawal served as the Military Governor of Benue State (July 1978–October 1979), overseeing a peaceful transition to civilian rule under Aper Aku. He later served as the Federal Minister of Youth and Sports and sat on the Armed Forces Ruling Council under General Ibrahim Babangida."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AE Okpere', post: 'FSS psc mni', era: 'faculty', from: '1984-01-20', to: '1986-03-01', photo: 'assets/directors/06-air-cdre-ae-okpere.jpg',
      fullName: "Air Vice Marshal Anthony Ebehijele Okpere",
      bio: [
        "Air Vice Marshal Anthony Ebehijele Okpere was born in Uromi, Edo State on 28 September 1943 and educated at Ishan Grammar School. He enlisted as a cadet officer in the pioneer intake of the Nigerian Air Force in 1963.",
        "The senior officer served as a combat helicopter pilot during the Nigerian Civil War, flying hazardous operational missions from 1968 to 1970 and surviving 2 near-death combat incidents.",
        "Air Vice Marshal AE Okpere was the Director of the Air Faculty at AFCSC, Jaji (1979–1982), where he shaped advanced airpower curriculum. He later served as the Air Officer Commanding of both Training Command in Kaduna (1987–1989) and Tactical Air Command in Makurdi (1989–1990).",
        "The distinguished senior officer served under General Ibrahim Babangida’s military administration as the Managing Director of Nigeria Airways (1984–1986) and subsequently as the Federal Minister of Aviation (1986–1987). He was also an active member of the elite Armed Forces Ruling Council."
      ]
    },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'A Okpanachi', post: 'FSS psc mni', era: 'faculty', from: '1986-03-01', to: '1988-01-30', photo: 'assets/directors/07-gp-capt-a-okpanachi.jpg',
      fullName: "Air Commodore Achem Okpanachi",
      bio: [
        "Air Commodore Achem Okpanachi hailed from Kogi State and was a pioneering senior officer of the Nigerian Air Force who passed away on September 14, 2016, at the age of 74. He served as the Director of the Department of Air Warfare at AFCSC, Jaji, contributing to the development of strategic airpower and joint-service training for senior officers.",
        "The very senior officer served as the Commander of the Nigerian Air Force Logistics Group in Ikeja, Lagos, playing a central role in managing the serviceability and deployment of strategic air force assets. He was also Director of Inspections at Nigerian Air Force Headquarters in Abuja and represented Nigeria internationally as the Defence Attaché at the Nigerian Embassy in Moscow, Russia."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'MM Aliyu', post: 'FSS psc mni', era: 'faculty', from: '1988-07-10', to: '1989-02-21', photo: 'assets/directors/08-air-cdre-mm-aliyu.jpg',
      fullName: "Air Vice Marshal MM Aliyu",
      bio: [
        "Air Vice Marshal MM Aliyu served as the Director of the Department of Air Warfare at AFCSC, Jaji, and held foundational roles as Chief Instructor of the Air Warfare Department at Jaji and Chief Instructor of the Air Force Wing at the Nigerian Defence Academy, Kaduna.",
        "Air Vice Marshal MM Aliyu was also the Commander of the 551 NAF Station Jos and the Chief of Staff, Headquarters Ground Training Command, Enugu.",
        "The very senior officer served at the highest tri-service level as the Director of Sports at Defence Headquarters in Abuja."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Mbaka', post: 'FSS psc mni', era: 'faculty', from: '1989-02-23', to: '1990-09-10', photo: 'assets/directors/09-air-cdre-ja-mbaka.jpg',
      fullName: "Air Vice Marshal JA Mbaka",
      bio: [
        "Air Vice Marshal JA Mbaka is celebrated as a legendary foundational pilot who trained a generation of future NAF aviators and famously averted 2 catastrophic crashes by safely landing aircraft following mid-air engine failures over Ilorin and Kaduna states.",
        "He served as the Director of the Department of Air Warfare at AFCSC, Jaji, directing joint-service operations training and strategic airpower curriculum for senior officers.",
        "He also held the strategic role of Air Officer Commanding NAF Logistics Command Ikeja, Lagos, from September 1990 to January 1992, managing service-wide logistical infrastructure and technical maintenance."
      ]
    },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'MA Johnson', post: 'FSS psc mni', era: 'faculty', from: '1990-09-10', to: '1991-03-10', photo: 'assets/directors/10-gp-capt-ma-johnson.jpg',
      fullName: "Air Commodore MA Johnson",
      bio: [
        "Air Commodore MA Johnson served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College (AFCSC), Jaji, shaping joint-service airpower training for senior officers.",
        "He is remembered in Nigerian history as a member of the influential \"Lagos Caucus\" in 1993. Alongside other top officers, he helped craft the strategic security blueprint, “The Report: The Way Forward”, to navigate the national political crisis following the June 12 election annulment."
      ]
    },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'VO Omozokpia', post: 'FSS psc mni', era: 'faculty', from: '1991-03-11', to: '1991-12-03', photo: 'assets/directors/11-gp-capt-vo-omozokpia.jpg',
      fullName: "Air Commodore VO Omozokpia",
      bio: [
        "Air Commodore VO Omozokpia served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he directed advanced airpower doctrine and joint-service operational coursework for senior military officers.",
        "He was appointed to the elite role of Air Officer Commanding, NAF Logistics Command in Ikeja, Lagos, serving as the head of service-wide supply, asset maintenance, and deployment infrastructure from May 1994 to September 1994."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JO Sunmonu', post: 'FSS DSO psc mni', era: 'faculty', from: '1991-12-04', to: '1993-10-07', photo: 'assets/directors/12-air-cdre-jo-sunmonu.jpg',
      fullName: "Air Commodore JO Sunmonu",
      bio: [
        "Air Commodore JO Sunmonu served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he directed tactical curricula and advanced airpower training for senior military officers.",
        "He also served as a top-tier aircraft engineering specialist and held the major operational command of Commander of the 401 Aircraft Maintenance Depot in Ikeja, Lagos, overseeing fleet overhauls and structural repairs."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'VC Akiti', post: 'FSS DSO psc(+)', era: 'faculty', from: '1993-10-08', to: '1994-09-26', photo: 'assets/directors/13-air-cdre-vc-akiti.jpg',
      fullName: "Air Vice Marshal Victor C Akiti",
      bio: [
        "Air Vice Marshal Victor C Akiti was decorated with the prestigious national honor of Commander of the Order of the Niger (CON) for his exceptional service. He served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, shaping the advanced airpower paradigms and joint-operations curricula for senior military officers.",
        "He held the highly influential appointment of Air Officer Personnel at Defence Headquarters, making him centrally responsible for career deployment, human resource management, and administrative welfare across the service branch."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Akawo', post: 'FSS psc(+) fwc', era: 'faculty', from: '1994-09-26', to: '1997-08-18', photo: 'assets/directors/14-air-cdre-ja-akawo.jpg',
      fullName: "Air Commodore JA Akawu",
      bio: [
        "Air Commodore JA Akawu served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he steered advanced joint-service tactical frameworks and airpower operational curricula for senior officers.",
        "He contributed extensively to high-level strategic planning and joint operational staff development across the tri-service arms of the Nigerian Armed Forces."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'I Abdulrahman', post: 'FSS MSS DSS psc(+)', era: 'faculty', from: '1997-08-18', to: '1998-12-18', photo: 'assets/directors/15-air-cdre-i-abdulrahman.jpg',
      fullName: "Air Vice Marshal Ibrahim Abdulrahman",
      bio: [
        "Air Vice Marshal Ibrahim Abdulrahman served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji. In this role, he was responsible for auditing tactical manuals, leading regional operational exercises, and supervising advanced airpower academic curriculum for senior officers across the tri-services.",
        "Beyond his instructional tenure at Jaji, he was appointed to lead the NAF's primary aviation instructional wing as the Air Officer Commanding, Training Command Kaduna. In this capacity, he directed the foundational flying schools, technical institutes, and combat readiness training programmes for the next generation of Nigerian military pilots.",
        "He also served as the Director of Operations, HQ NAF, which made him central to national air defense deployment frameworks during his active service years."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'EU Okundaye', post: 'DSS psc(+) ndc', era: 'faculty', from: '1999-02-18', to: '1999-07-28', photo: 'assets/directors/16-air-cdre-eu-okundaye.jpg',
      fullName: "Air Commodore EU Okundayo",
      bio: [
        "Air Commodore EU Okundayo served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he directed advanced airpower tactics, joint operations curriculum, and institutional planning for senior military officers.",
        "He also served at the cutting edge of modern military intelligence as the Director of National Grid and Space Systems at the Defence Space Administration Abuja, managing satellite-driven defense technologies."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Kolawole', post: 'FSS MSS DSS psc fwc (MSc)', era: 'faculty', from: '1999-07-28', to: '2001-05-15', photo: 'assets/directors/17-air-cdre-ja-kolawole.jpg',
      fullName: "Air Commodore JA Kolawole",
      bio: [
        "Air Commodore JA Kolawole served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College (AFCSC), Jaji, where he steered advanced joint-service tactical frameworks and airpower operational curricula for senior officers.",
        "He was known within defense structures for his administrative acumen, leading specialized staff deployments and high-level training coordination across the armed forces."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'KR Ekezie', post: 'DSS psc(+) ndc', era: 'faculty', from: '2001-07-26', to: '2003-01-10', photo: 'assets/directors/18-air-cdre-kr-ekezie.jpg',
      fullName: "Air Vice Marshal KR Ezekie",
      bio: [
        "Air Vice Marshal KR Ezekie served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he directed advanced air warfare curricula, spearheaded joint-service tactical simulation exercises, and mentored senior military officers.",
        "He held senior administrative and command appointments at HQ NAF and within tri-service formations, specializing in defense policy and strategic force deployment."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'TM Ato', post: 'DSS psc(+) MSc', era: 'faculty', from: '2003-01-10', to: '2004-02-17', photo: 'assets/directors/19-air-cdre-tm-ato.jpg',
      fullName: "Air Commodore TM Ato",
      bio: [
        "Air Commodore TM Ato served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he steered advanced tactical airpower curricula and joint-service operational coursework for senior military officers.",
        "He also contributed significantly to regional stability and international operations, deploying on vital West African and continental peacekeeping missions in Sierra Leone, Liberia, and Darfur."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'I Danbauchi', post: 'DSS psc(+) fwc LLB MSc', era: 'warfare', from: '2004-02-17', to: '2006-09-08', photo: 'assets/directors/20-air-cdre-i-danbauchi.jpg',
      fullName: "Air Commodore I Danbauchi",
      bio: [
        "Air Commodore I Danbauchi served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he directed advanced airpower tactics, joint operations curriculum, and institutional planning for senior military officers.",
        "Outside his instructional roles, he served as the Commander of the 403 NAF Logistics Group in Kano, steering vital maintenance and equipment supply lines to sustain operations across the northern aviation sectors."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Udo', post: 'DSS psc(+) fwc MSc', era: 'warfare', from: '2006-09-08', to: '2007-01-09', photo: 'assets/directors/21-air-cdre-ja-udo.jpg',
      fullName: "Air Commodore JA Udo",
      bio: [
        "Air Commodore JA Udo served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he steered advanced joint-service tactical frameworks and airpower operational curricula for senior officers."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'SA Leks', post: 'DSS psc(+) fwc MSc', era: 'warfare', from: '2007-01-08', to: '2007-08-08', photo: 'assets/directors/22-air-cdre-sa-leks.jpg', commandant: 'sa-leks',
      fullName: "Air Vice Marshal SA Leks",
      bio: [
        "Air Vice Marshal SA Leks served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji in 2007, directing advanced airpower training for senior military officers.",
        "He also served as the Deputy Commandant of the Nigerian Defence Academy, before being appointed to head the entire Armed Forces Command and Staff College Jaji as the Commandant."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'MY Oladunni', post: 'DSS psc(+) fwc MSc', era: 'warfare', from: '2007-08-08', to: '2010-01-29', photo: 'assets/directors/23-air-cdre-my-oladunni.jpg',
      fullName: "Air Commodore MY Oladunni",
      bio: [
        "Air Commodore MY Oladunni served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, where he directed advanced airpower tactics, joint operations curriculum, and institutional planning for senior military officers.",
        "He was also a top-tier technical specialist and held the major staff appointment of Director of Engineering at HQ NAF, overseeing fleet lifecycle frameworks and maintenance protocols."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'GO Ekagbo', post: 'DSS psc(+) fndu (PRC)', era: 'warfare', from: '2010-01-30', to: '2012-12-06', photo: 'assets/directors/24-air-cdre-go-ekagbo.jpg',
      fullName: "Air Commodore GO Ekagbo",
      bio: [
        "Air Commodore GO Ekagbo served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, championing modern military professionalism, airpower tactics, and democratic civil-military relation paradigms.",
        "Air Commodore GO Ekagbo sustained fatal injuries during the Jaji military cantonment twin church bombings on 25 November 2012, passing away in December 2012.",
        "The Ekagbo Quarters at NAF Base Kaduna was named after him to preserve his legacy within the service"
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'SG Jeff-Zanni', post: 'DSS psc(+) ndc MSc', era: 'warfare', from: '2012-12-17', to: '2014-10-12', photo: 'assets/directors/25-air-cdre-sg-jeff-zanni.jpg',
      fullName: "Air Commodore Stephen Gbeje Jeff-Zanni",
      bio: [
        "Air Commodore Stephen Gbeje Jeff-Zanni was born in July 1962. He rose to become an accomplished NAF fighter pilot and flying instructor.",
        "He served as a Director, Department of Air Warfare, Armed Forces Command and Staff College, Jaji, and held key defense policy postings, including Deputy Director of Plans and Director of Safety at HQ NAF.",
        "Post-military, he transitioned to global academia, earning an MSc from Pakistan, an MBA from Bangor University, and a PhD in Insurance Law."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'NO Oyibo', post: 'DSS psc(+) fdc(+) MSc', era: 'warfare', from: '2014-10-13', to: '2015-02-08', photo: 'assets/directors/26-air-cdre-no-oyibo.jpg',
      fullName: "Air Commodore Noah O Oyibo",
      bio: [
        "Air Commodore Noah O Oyibo served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, directing advanced joint-service tactical airpower curricula.",
        "He also served extensively as the Senior Air Staff Officer at Headquarters Ground Training Command in Enugu, steering regional ground operations and training infrastructure."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'FM Makinde', post: 'DSS psc(+) ndc MSc ACA', era: 'warfare', from: '2015-02-09', to: '2016-02-16', photo: 'assets/directors/27-air-cdre-fm-makinde.jpg',
      fullName: "Air Commodore FM Makinde",
      bio: [
        "Air Commodore FM Makinde served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, coordinating advanced joint-service tactical airpower training.",
        "He was also appointed to the prominent roles of Director of Air Engineering at HQ NAF and Commander of the 333 Logistics Group in Kaduna.",
        "He continues to advance national security as a key research panelist and discussant for the Defence Research and Development Bureau"
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AS Liman', post: 'FSS MSS DSS psc(++) BSc PGD FCAI mni', era: 'warfare', from: '2016-02-22', to: '2017-05-30', photo: 'assets/directors/28-air-cdre-as-liman.jpg', commandant: 'as-liman',
      fullName: "Air Vice Marshal Abubakar Sadiq Liman",
      bio: [
        "Air Vice Marshal Abubakar Sadiq Liman was born on 1 January 1964 in Lapai, Niger State. He is a highly qualified helicopter engineer trained locally and internationally in Russia on specialized military airframes (Mil Mi-34C and Hughes 300C platforms).",
        "He served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji (2016–2017), and later as the Commandant Armed Forces Command and Staff College, Jaji.",
        "He also served as the Commandant of the Armed Forces Resettlement Centre, Lagos (2018), and as the Director of Space Utilization at Defence Headquarters, Abuja."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'NK Kumzhi', post: 'DSS psc(++) fdc MSc', era: 'warfare', from: '2017-05-30', to: '2018-08-27', photo: 'assets/directors/29-air-cdre-nk-kumzhi.jpg',
      fullName: "Air Vice Marshal Nanjul Kenneth Kumzhi",
      bio: [
        "Air Vice Marshal Nanjul Kenneth Kumzhi served as the Director, Department of Air Warfare, Armed Forces Command and Staff College, Jaji, coordinating advanced joint-service tactical airpower training.",
        "He was also the Air Officer Commanding, Air Training Command in Kaduna and previously as the Chief of Staff at Headquarters Tactical Air Command in Makurdi.",
        "He commanded international military diplomacy as the Director of Sports at Defence Headquarters and Chief of the Nigerian Delegation to CISM."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'HI Alhaji', post: 'DSS psc(+) fndu nswc BEng MTech MSc', era: 'warfare', from: '2018-08-28', to: '2020-01-05', photo: 'assets/directors/30-air-cdre-hi-alhaji.jpg', commandant: 'hi-alhaji',
      fullName: "Air Vice Marshal Hassan Ibrahim Alhaji",
      bio: [
        "Air Vice Marshal Hassan Ibrahim Alhaji served as the Director of the Department of Air Warfare, Armed Forces Command and Staff College, Jaji, coordinating advanced joint-service tactical airpower training.",
        "The distinguished senior officer later became the Commandant of the Armed Forces Command and Staff College, Jaji, supervising advanced combat and staff development for the entire tri-service officer corps of the federation."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AY Dari', post: 'DSS psc(+) ndc BSc MDS MSDS AMNIM', era: 'warfare', from: '2020-01-06', to: '2021-03-31', photo: 'assets/directors/31-air-cdre-ay-dari.jpg',
      fullName: "Air Vice Marshal Ahmed Yusuf Dari",
      bio: [
        "Air Vice Marshal Ahmed Yusuf Dari was born on 10 March 1970 in Zaria, Kaduna State. He entered the Nigerian Defence Academy as part of the 41 Regular Course in 1989 and was commissioned into the NAF on 17 September 1994. He holds a BSc in Chemistry and 2 Master's degrees in Defence and Strategic Studies.",
        "He is a seasoned pilot instructor who has flown 8 different aircraft types, logging an impressive total of over 2,500 command flying hours.",
        "He served as the Director of the Department of Air Warfare, Armed Forces Command and Staff College, Jaji, where he successfully modernized the faculty's joint-services tactical simulation matrices.",
        "He was the Air Officer Commanding, Air Training Command, Kaduna and later the Chief of Training HQ NAF. He currently serves as the General Manager of the Nigerian Air Force Investment Limited Group of Companies."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'CO Obiabaka', post: 'DSS psc(+) fdc DPA MIASS MBA Law MNIM MSPSP MCIPM', era: 'warfare', from: '2021-03-31', to: '2023-01-06', photo: 'assets/directors/32-air-cdre-co-obiabaka.jpg',
      fullName: "Air Vice Marshal Chidiebere Obinna Obiabaka",
      bio: [
        "Air Vice Marshal Chidiebere Obinna Obiabaka is member of the 42 Regular Course at the Nigerian Defence Academy. He holds a BSc in Chemistry and multiple master's degrees spanning strategic studies, international affairs, and business administration law.",
        "He served as Director, Department of Air Warfare, Armed Forces Command and Staff College, Jaji. He also commanded the 121 Forward Operations Base and the 553 Base Services Group Enugu.",
        "His appointments at HQ NAF include Director, Museum and Archives and Director, Veteran Affairs. He is currently the Air Secretary."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'EA Ola', post: 'MSS psc(+) fawc(+) fdc ATO BEng MIADS COREN MNIM', era: 'warfare', from: '2023-01-06', to: '2023-07-10', photo: 'assets/directors/33-air-cdre-ea-ola.jpg',
      fullName: "Air Commodore Emmanuel Akinbo Ola",
      bio: [
        "Air Commodore Emmanuel Akinbo Ola hails from Osun State. He is of the Armament speciality. He holds a B Engr in Elect/Elect Engineering, an MPhil in Security and Strategic Studies, and a Master's in International Affairs and Defence Studies.",
        "Air Commodore EA Ola has held prominent leadership appointments including Commander 151 Base Services Group Makurdi, Director of Production, DICON, and Deputy Director Plans HQ NAF. He was also Commander 633 Central Armament Depot.",
        "The distinguished senior officer was a Directing Staff at both the Army War College and Air Force War College Nigeria. He later served as Director Department of Air Warfare, Armed Forces Command and Staff College, Jaji."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'A Audu', post: 'DSS psc(+) fawc(+) nswc MSc MIADS AMNIM', era: 'warfare', from: '2023-07-10', to: '2025-08-14', photo: 'assets/directors/34-air-cdre-a-audu.jpg',
      fullName: "Air Commodore A Audu",
      bio: [
        "Air Commodore A Audu was commissioned on 18 September 1999 as a member the 46 Regular Course of the Nigerian Defence Academy, into the Air Traffic Services Specialty of the NAF. He holds a BSc in Chemistry and Master of International Affairs and Defence Studies, both from the Nigerian Defence Academy. He also holds a Master of National Security and War Studies from the National Defence University, Islamabad Pakistan.",
        "The erudite senior officer has an extensive educational pedigree, including serving as Chief Instructor at the Armed Forces Command and Staff College, Jaji and Director of Studies at the Air Force War College, Makurdi. He also served as the Director of the Department of Air Warfare at the Armed Forces Command and Staff College, Jaji, directing advanced joint-service tactical airpower training.",
        "Air Commodore A Audu’s command & operational footprint includes, amongst others, his service as the Military Airport Commandant for Abuja Airport, Commander 151 Base Services Group in Makurdi, and a UN Military Observer in the DRC (MONUC). Additionally, he was Director, Directorate of Airspace Management and Services at HQ NAF."
      ]
    },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'SM Chindo', post: 'DSS psc(+) ndc(TZ) COREN MMDAS MSS MTech', era: 'warfare', from: '2025-08-15', to: '2026-01-12', photo: 'assets/directors/35-air-cdre-sm-chindo.jpg',
      fullName: "Air Commodore Shehu Muhammad Chindo",
      bio: [
        "Air Commodore Shehu Muhammad Chindo hails from Argungu LGA, Kebbi State. He was commissioned into the NAF as a member of the 47th Regular Course of the Nigerian Defence Academy in September 2000, graduating with a BEng in Electrical/ Electronics Engineering.",
        "The erudite senior officer holds 3 postgraduate degrees, including an MTech from Obafemi Awolowo University, a Master’s in Military Operational Arts & Science from Maxwell AFB, USA, and a Master’s in Security and Strategic Studies from the National Defence College, Tanzania. He also completed specialised Electronic Warfare training in Pakistan.",
        "Air Commodore SM Chindo served as the Director of the Department of Air Warfare, Armed Forces Command and Staff College, Jaji from August 2025 to January 2026. His next appointment was as the Deputy Commandant and Director of Studies at the Air Force War College Nigeria in Makurdi, capping an instructional career that includes roles as Directing Staff at Jaji and Air Force War College, Chief Instructor at the Nigerian Defence Academy Air Force Wing, and HOD at AFIT.",
        "The distinguished senior officer’s key commands and staff postings include Commander 041 Communication and Information Systems Depot,Lagos and Commander 553 Base Services Group Enugu. His high-level staff roles include serving as Principal Staff Officer (Coordination) to the Chief of the Air Staff (2019–2021) and Deputy Director of Systems Management at HQ NAF."
      ]
    },
    /* Not in the portraits PDF: from the biographies deck (slide 36), whose
       portrait caption calls him the Director. Start date to be confirmed. */
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'OO Obasa', post: 'DSS psc(++) fawc(+) fdc BEng MPhil MNIM PhD', era: 'warfare', from: null, to: null, current: true, photo: 'assets/directors/36-air-cdre-oo-obasa.jpg',
      fullName: "Air Commodore Olamiju Olusegun Obasa",
      bio: [
        "Air Commodore Olamiju Olusegun Obasa holds a BEng in Mechanical Engineering from the Nigerian Defence Academy and aeronautical training from Bangalore, India. He also holds a PhD in Defence and Strategic Studies from the Nigerian Defence Academy, an MPhil, and a Master's in Conflict, Peace and Security from Ghana (KAIPTC).",
        "The erudite senior officer has built an elite educational profile, serving as a Directing Staff at both the Nigerian and Ghanaian Staff Colleges, Chief Instructor at the Armed Forces Command and Staff College, Jaji, and Director of Coordination at the Air Force War College Nigeria. He also served as Director, Department of Air Warfare, Armed Forces Command and Staff College, Jaji.",
        "Air Commodore OO Obasa was also Commander, 131 Engineering Group and the NAF Component Commander for Operation MESA in Lagos, as well as a UN Air Operations Staff Officer in Darfur, Sudan (UNAMID)."
      ]
    }
  ],

  /* ----------------------------------------------------------
     COMMANDANTS — in order of appointment. "no" is the ordinal.
     Sources: "profile of Comdts for DLW Hallof Fame.docx",
     "Air Vice Marshal Oluroti Anthony Tuwase.docx" and "Profile AVM EO Alade.doc".
     Tenure dates are those on the commandants' portraits on the Hall of
     Fame wall, which
     differ in places from the dates in the documents.
     The wording is the documents' own, except that their closing line
     ("...improved learning in the Army Faculty / Department of Land
     Warfare") now reads "...at the College" for this Air Warfare hall.

     photo: the pencil portrait from the wall, straightened and cropped
     (assets/commandants/). photo: null shows the officer's initials instead.
     bio: [] shows "Biography to follow".
     ---------------------------------------------------------- */
  commandants: [
    {
      id: 'go-ejiga', no: 1, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'GO Ejiga', serviceNo: 'N/230',
      post: 'DSS FSS psc RM NSM GSM', fullName: 'Geoffrey Obiaje Ejiga',
      from: '1976-09-01', to: '1978-08-31', photo: 'assets/commandants/01-go-ejiga.jpg',
      facts: [
        { label: 'Born', value: '15 February 1941, Adoka' },
        { label: 'Hometown', value: 'Otukpo LGA, Benue State' },
        { label: 'Commissioned', value: '12 January 1962 · Infantry' }
      ],
      bio: [
        'Maj Gen Geoffrey Obiaje Ejiga was born on 15 February 1941 in Adoka and hailed from Otukpo Local Government Area of Benue State. He is a member of Nigerian Military Training College/62 and was commissioned into the Nigerian Army Infantry Corps on 12 January 1962. He attended the US Army Command and General Staff College, Kansas USA.',
        'He served as the First Commandant at the then Command and Staff College (CSC) from 23 September 1975 – 1 September 1978. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces. He served as the Commander Training and Doctrine Command from 1983 - Jan 1984 before his retirement on 22 February 1984.',
        'Maj Gen GO Ejiga is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'jo-bajowa', no: 2, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'JO Bajowa', serviceNo: 'N/199',
      post: 'FSS psc RM GSM DSM NSM', fullName: 'Joseph Oluyemi Bajowa',
      from: '1978-09-01', to: '1979-12-05', photo: 'assets/commandants/02-jo-bajowa.jpg',
      facts: [
        { label: 'Born', value: '27 December 1938, Igbotako-Okitipupa' },
        { label: 'Hometown', value: 'Okitipupa LGA, Ondo State' },
        { label: 'Commissioned', value: '29 July 1961 · Infantry' }
      ],
      bio: [
        'Maj Gen Joseph Oluyemi Bajowa was born on 27 December 1938 in Igbotako-Okitipupa and hailed from Okitipupa Local Government Area of Ondo State. He is a member of Mons Officers’ Cadet Academy Aldershot and was commissioned into the Nigerian Army Infantry Corps on 29 July 1961. He attended the Command and Staff Course at Staff College, Camberley, UK.',
        'He served as the Second Commandant at the then Command and Staff College (CSC) from 1 January 1978 - 15 December 1979. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces, before his retirement on 16 April 1980.',
        'Maj Gen JO Bajowa is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'mi-wushishi', no: 3, service: 'army', rank: 'Lieutenant General', rankShort: 'Lt Gen', name: 'MI Wushishi', serviceNo: 'N/233',
      post: 'FSS psc DSM NSM RM GSM NAM', fullName: 'Mohammed Inuwa Wushishi',
      from: '1980-03-16', to: '1980-04-27', photo: 'assets/commandants/03-mi-wushishi.jpg',
      facts: [
        { label: 'Born', value: '1 January 1940, Wushishi' },
        { label: 'Hometown', value: 'Wushishi LGA, Niger State' },
        { label: 'Commissioned', value: '12 January 1962 · Infantry' }
      ],
      bio: [
        'Lt Gen Mohammed Inuwa Wushishi was born on 1 January 1940 in Wushishi and hailed from Wushishi Local Government Area of Niger State. He is a member of Mons Officer Cadets’ Academy/62, Aldershot and was granted Short Service Combatant commission into the Nigerian Army Infantry Corps on 12 January 1962. He attended Command and Staff Course at Staff College, Camberley, UK.',
        'He was the Third Commandant of the then Command and Staff College from 3 March 1980 – 15 April 1980. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces. He was Chief of Army Staff from 2 October 1981 – 3 January 1984 before his retirement on 3 January 1984.',
        'Lt Gen MI Wushishi is highly recognized and honored for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'dy-bali', no: 4, service: 'army', rank: 'General', rankShort: 'Gen', name: 'DY Bali', serviceNo: 'N/453',
      post: 'FSS psc OFR GCON', fullName: 'Domkat Yah Bali',
      from: '1981-01-02', to: '1983-09-03', photo: 'assets/commandants/04-dy-bali.jpg',
      facts: [
        { label: 'Born', value: '27 February 1940, Zamko' },
        { label: 'Hometown', value: 'Langtang LGA, Plateau State' },
        { label: 'Commissioned', value: '12 December 1963 · Artillery' }
      ],
      bio: [
        'Gen Domkat Yah Bali was born on 27 February 1940 in Zamko. He hailed from Langtang Local Government Area of Plateau State. He is a member of the Royal Military Academy Sandhurst Class of 1963 and was commissioned into the Nigerian Army Corps of Artillery on 12 December 1963. He attended the Command and Staff Course at Camberley, United Kingdom.',
        'He was the Fourth Commandant of the then Command and Staff College (CSC), Jaji from 5 January 1981 to 31 July 1983. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces. He was the Minister of Internal Affairs from 29 December 1989 until his retirement on 2 April 1990.',
        'Gen DY Bali is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'ao-aduloju', no: 5, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'AO Aduloju', serviceNo: 'N/396',
      post: 'FSS psc mni GSM NSM DSM RM', fullName: 'Alfred Olasehinde Aduloju',
      from: '1983-09-04', to: '1984-01-16', photo: 'assets/commandants/05-ao-aduloju.jpg',
      facts: [
        { label: 'Born', value: '23 April 1939, Ikare' },
        { label: 'Hometown', value: 'Ikare Akoko LGA, Ondo State' },
        { label: 'Commissioned', value: '16 August 1963 · Signals' }
      ],
      bio: [
        'Maj Gen Alfred Olasehinde Aduloju was born on 23 April 1939 in Ikare. He hailed from Ikare Akoko Local Government Area of Ondo State. He is a member of the Military Academy Canada Course 63 and was commissioned into the Nigerian Army Signals on 16 August 1963. He attended Command and General Staff Course USA.',
        'He was the Fifth Commandant of the then Command and Staff College (CSC), Jaji from 1 August 1983 to 9 January 1984. He retired from the Service on 16 January 1984. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces.',
        'Maj Gen AO Aduloju was highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'pu-omu', no: 6, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'PU Omu', serviceNo: 'N/385',
      post: 'FSS psc fdc GSM NSM DSM RSM', fullName: 'Paul Ufuoma Omu',
      from: '1984-01-17', to: '1987-12-31', photo: 'assets/commandants/06-pu-omu.jpg',
      facts: [
        { label: 'Born', value: '1 July 1940, Igbide' },
        { label: 'Hometown', value: 'Isoko LGA, Delta State' },
        { label: 'Commissioned', value: '25 July 1963 · Infantry' }
      ],
      bio: [
        'Maj Gen Paul Ufuoma Omu was born on 1 July 1940 in Igbide. He hailed from Igbide Isoko Local Government Area of Delta State. He is a member of the Nigerian Military Training College Course 63 and was commissioned into the Nigerian Army Corps of Infantry on 25 July 1963. He attended the then Army Command and Staff College Course 1 in Jaji, Nigeria.',
        'He later served as the Sixth Commandant of the Command and Staff College (CSC) from 9 January 1984 to 30 December 1987. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces. He was the Director General at the National Institute for Policy and Strategic Studies (NIPSS) from 2 January 1990 until his retirement on 3 September 1990.',
        'Maj Gen PU Omu is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'ab-mamman', no: 7, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'AB Mamman', serviceNo: 'N/611',
      post: 'FSS psc mni DSM NSM RM GSM SJM', fullName: 'Abdullahi Bagudu Mamman',
      from: '1988-01-31', to: '1990-09-02', photo: 'assets/commandants/07-ab-mamman.jpg',
      facts: [
        { label: 'Born', value: '21 July 1944, Nyaba-Abaji' },
        { label: 'Hometown', value: 'Abaji Area Council, FCT Abuja' },
        { label: 'Commissioned', value: '16 December 1965 · Artillery' }
      ],
      bio: [
        'Maj Gen Abdullahi Bagudu Mamman was born on 21 July 1944 in Nyaba-Abaji in Kwara State. He hailed from Abaji Area Council of the Federal Capital Territory Abuja. He was a member of the Royal Military Academy Sandhurst Class of 1965 and commissioned into the Nigerian Army Corps of Artillery on 16 December 1965. He attended the Army Staff Course in 1976 at the then Army Command and Staff College Jaji, Nigeria.',
        'He served as the Seventh Commandant of the Command and Staff College from 31 December 1987 to 2 September 1990. He contributed immensely to learning during his service and turned out quality officers for the Armed Forces. He was appointed Minister of Internal Affairs on 3 September 1990 and subsequently tendered his application for retirement effective the same day he assumed office as minister.',
        'Maj Gen AB Mamman is highly recognised and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'mb-haladu', no: 8, service: 'army', rank: 'Lieutenant General', rankShort: 'Lt Gen', name: 'MB Haladu', serviceNo: 'N/562',
      post: 'DSS MSS FSS psc mni SJM', fullName: 'Mohammed Balarabe Haladu',
      from: '1990-09-02', to: '1992-01-30', photo: 'assets/commandants/08-mb-haladu.jpg',
      facts: [
        { label: 'Born', value: '1 April 1944, Kano' },
        { label: 'Hometown', value: 'Kano Municipal LGA, Kano State' },
        { label: 'Commissioned', value: '18 April 1965 · Infantry' }
      ],
      bio: [
        'Lt Gen Mohammed Balarabe Haladu was born on 1 April 1944 in Kano. He hailed from Kano Municipal Local Government Area of Kano State. He was a member of the Pakistan Military Academy Class of 1965 and was commissioned into the Infantry Corps on 18 April 1965. He attended the Army Staff Course in 1977 at the then Army Command and Staff College Jaji, Nigeria.',
        'He served as the Eighth Commandant of the Command and Staff College from 3 September 1990 to 30 January 1992. He contributed immensely to learning during his service and turned out quality officers for the Armed Forces. He was also the Commandant Nigerian Defence Academy from 18 January 1993 to 19 March 1995 and later Minister of Industries from 20 March 1995 till his death on 28 June 1998.',
        'Lt Gen MB Haladu is highly recognised and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'jn-dogonyaro', no: 9, service: 'army', rank: 'Lieutenant General', rankShort: 'Lt Gen', name: 'JN Dogonyaro', serviceNo: 'N/649',
      post: 'CFR DSS MSS FSS psc mni DSM NSM GSM NDM RM SJM', fullName: 'Joshua Nimyel Dogonyaro',
      from: '1992-01-31', to: '1993-09-19', photo: 'assets/commandants/09-jn-dogonyaro.jpg',
      facts: [
        { label: 'Born', value: '6 September 1942, Dakan-Kuka' },
        { label: 'Hometown', value: 'Langtang LGA, Plateau State' },
        { label: 'Commissioned', value: '19 March 1967 · Armour' }
      ],
      bio: [
        'Lt Gen Joshua Nimyel Dogonyaro was born on 6 September 1942 in Dakan-Kuka. He hailed from Langtang Local Government Area of Plateau State. He was a member of the 1 Regular Course of the Nigerian Defence Academy and was commissioned into the Nigerian Army Armour Corps on 19 March 1967. He attended the Army Staff Course in 1976 at the then Army Command and Staff College Jaji, Nigeria.',
        'He served as the Ninth Commandant of the Command and Staff College from 31 January 1992 to 20 September 1993. He contributed immensely to learning during his service and turned out quality officers for the Armed Forces. Although he was appointed Chief of Defence Staff, he was not allowed to assume office; hence he towed the path of principle and opted for voluntary retirement.',
        'Lt Gen JN Dogonyaro is highly recognised for his strong character, exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'eu-unimna', no: 10, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'EU Unimna', serviceNo: 'N/1362',
      post: 'DSS MSS FSS psc(+) USndu NSM GSM DSM RM', fullName: 'Edward Ushie Unimna',
      from: '1993-09-20', to: '1996-09-16', photo: 'assets/commandants/10-eu-unimna.jpg',
      facts: [
        { label: 'Born', value: '20 June 1946, Ohong' },
        { label: 'Hometown', value: 'Obudu LGA, Cross River State' },
        { label: 'Commissioned', value: '14 March 1970 · Engineers' }
      ],
      bio: [
        'Maj Gen Edward Ushie Unimna was born on 20 June 1946 in Ohong; he hailed from Obudu Local Government Area of Cross River State. He is a member of 3 Regular Course and was commissioned into the Nigerian Army Engineers Corps on 14 March 1970. He attended Command and Staff Course 1 at the then Army Command and Staff College Jaji, Nigeria.',
        'He served as a distinguished member of Directing Staff from 1 August 1983 to 31 August 1984 and Chief Instructor from 1 September 1984 to 26 June 1986. He contributed immensely to learning during his service in Command and Staff College (CSC) and turned out quality officers for the Armed Forces. He was appointed the Tenth Commandant, CSC from 20 September 1993 to 28 July 1996 and later appointed Director at Petroleum Trust Fund (Presidency) from 29 July 1996 to 6 September 1998 before his retirement on 7 September 1998.',
        'Maj Gen EU Unimna is highly recognised and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'jm-inienger', no: 11, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'JM Inienger', serviceNo: 'N/712',
      post: 'DSS MSS FSS psc(+) mni NSM GSM DSM RM', fullName: 'John Mark Inienger',
      from: '1996-09-17', to: '1999-06-16', photo: 'assets/commandants/11-jm-inienger.jpg',
      facts: [
        { label: 'Born', value: '16 April 1945, Mkar-Gboko' },
        { label: 'Hometown', value: 'Vandeikya LGA, Benue State' },
        { label: 'Commissioned', value: '21 August 1967 · Infantry' }
      ],
      bio: [
        'Maj Gen John Mark Inienger was born on 16 April 1945 in Mkar - Gboko; he hailed from Vandeikya Local Government Area of Benue State. He was a member of Emergency Combatant Short Service Course 1/67 and was commissioned into the Nigerian Army Infantry Corps on 21 August 1967. He attended Command and Staff Course 1 at the then Army Command and Staff College Jaji, Nigeria.',
        'He served as a distinguished member of Directing Staff from 27 August 1978 to 31 July 1980. He was the Field Commander, Economic Community of West African States Monitoring Group, Liberia from 26 November 1993 to 28 July 1996. He was later appointed the Eleventh Commandant of the Command and Staff College (CSC) from 29 July 1996 to 31 May 1999 before his retirement on 1 June 99. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces.',
        'Maj Gen JM Inienger is highly recognised and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'ao-ogundana', no: 12, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'AO Ogundana', serviceNo: '',
      post: 'DSS psc(+) fwc CON', fullName: 'Anthony Olusegun Ogundana',
      from: '1999-07-31', to: '2003-03-31', photo: 'assets/commandants/12-ao-ogundana.jpg',
      facts: [
        { label: 'Born', value: '17 August 1950' },
        { label: 'Cadet course', value: '7 Regular Course, NDA' }
      ],
      bio: [
        'Air Vice Marshal Anthony Olusegun Ogundana was born on 17 August 1950. He started his military career from the Nigerian Defence Academy as a member of 7 Regular Course. He attended the Junior Division Course 1/79 at the Command and Staff College (CSC) in 1979. Thereafter, he attended the National War College, Abuja from May 1993 to September 1994.',
        'He served as a distinguished member of Directing Staff from September 1984 to July 1987. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces. He was also the Air Provost Marshal from September 1990 to June 1994 as well as Deputy Commandant, Nigerian Defence Academy from Aug 1998 to Jan 1999. He was appointed the Twelfth Commandant, CSC from 18 July 1999 to 30 March 2003 and served until he retired voluntarily from the Service.',
        'AVM AO Ogundana is highly recognised and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'sa-odesola', no: 13, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'SA Odesola', serviceNo: 'NAF/475',
      post: 'DSS fwc', fullName: 'Samuel Akinyemi Odesola',
      from: '2003-03-31', to: '2006-01-06', photo: 'assets/commandants/13-sa-odesola.jpg',
      facts: [
        { label: 'Born', value: '9 February 1952, Zaria' },
        { label: 'Enlisted', value: '4 January 1971 · 9 Regular Course' },
        { label: 'Commissioned', value: '23 June 1976 · Air Traffic Control' }
      ],
      bio: [
        'Air Vice Marshal (AVM) Samuel Akinyemi Odesola was born on 9 February 1952 in Zaria, Kaduna State. He enlisted into the Nigerian Air Force on 4 January 1971 as a member of 9 Regular Combatant Course of the Nigerian Defence Academy Kaduna, and commissioned to the rank of Pilot Officer on 23 Jun 1976 as an Air Traffic Control Officer. He attended both Junior and Senior Courses at the Armed Forces Command and Staff College Jaji. He was also a member of the Directing Staff at the Prestigious Institution.',
        'He was one time the Air Officer Commanding Logistics Command Ikeja, after which he was also appointed the Air Officer Commanding Training Command Kaduna. He was appointed the Thirteenth Commandant of the Armed Forces Command and Staff College Jaji, Kaduna. The senior officer voluntarily retired from the Service on 21 December 2005 after 34 years of meritorious service to the nation.',
        'Air Vice Marshal SA Odesola is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'er-ejeh', no: 14, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'ER Ejeh', serviceNo: '',
      post: 'FSS DSS psc(+) fwc(+) MSc', fullName: 'Emmanuel Robert Ejeh',
      from: '2006-01-06', to: '2008-09-03', photo: 'assets/commandants/14-er-ejeh.jpg',
      facts: [
        { label: 'Born', value: '17 April 1952' },
        { label: 'Commissioned', value: 'June 1975 · Pilot Officer' }
      ],
      bio: [
        'Air Vice Marshal Emmanuel Robert Ejeh was born on 17 April 1952. He enlisted into the Nigerian Air Force and attended his Officer’s Cadet’s Course at the Nigerian Defence Academy in January 1973. He was commissioned to the rank of Pilot Officer in June 1975. Air Vice Marshal ER Ejeh was at the prestigious Armed Forces Command and Staff College for his Junior Staff and Senior Staff Courses.',
        'He was a member of the Directing Staff before being appointed as the Deputy Director at Headquarters Nigerian Air Force and Director of Logistics at the Nigerian Defence Academy. Air Vice Marshal ER Ejeh held the appointment of Air Officer Commanding Logistics before being appointed the Fourteenth Commandant of the Armed Forces Command and Staff College on 6 January 2006. The senior officer voluntarily retired from the Service on 3 September 2008 after 33 years of meritorious service to the nation.',
        'Air Vice Marshal ER Ejeh is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'sbe-gberevbie', no: 15, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'SBE Gberevbie', serviceNo: '',
      post: 'DSS psc(+) fwc(+) LLB BL MSc OON', fullName: 'Sonni Bernard Enemuadia Gberevbie',
      from: '2008-10-20', to: '2009-08-03', photo: 'assets/commandants/15-sbe-gberevbie.jpg',
      facts: [
        { label: 'Born', value: '15 November 1953' },
        { label: 'Enlisted', value: '26 December 1973 · Short Service Course 7' }
      ],
      bio: [
        'Air Vice Marshal Sonni Bernard Enemuadia Gberevbie was born on 15 November 1953. He enlisted into the Nigerian Air Force as a Potential Pilot intake on 26 December 1973 and commenced his military training at the Nigerian Defence Academy as a cadet of the Short Service Course 7. He attended the Junior and Senior Staff Courses at the Armed Forces Command and Staff College Jaji, Nigeria. He also attended the National War College Abuja; and the International Joint Operations and Planning Course at the Maritime Warfare Centre, Southwick, United Kingdom.',
        'He served as a distinguished member of Directing Staff as well as Chief Instructor Armed Forces Command and Staff College. He contributed immensely to learning during his service in CSC and turned out quality officers for the Armed Forces. He was the Director of Plans, Headquarters Nigerian Air Force from February 2003 to 20 October 2008. From this position, he was appointed as the Fifteenth Commandant of the Armed Forces Command and Staff College on 20 October 2008 from where he retired on 15 November 2009.',
        'AVM SBE Gberevbie is highly recognised and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'sa-leks', no: 16, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'SA Leks', serviceNo: '',
      post: 'DSS psc(+) fwc MSc', fullName: 'Sunday Ali Leks',
      from: '2009-08-03', to: '2010-11-11', photo: 'assets/commandants/16-sa-leks.jpg', director: 'SA Leks',
      facts: [
        { label: 'Born', value: 'Daika, Mangu LGA, Plateau State' },
        { label: 'Commissioned', value: '1978 · Pilot Officer' }
      ],
      bio: [
        'Air Vice Marshal Sunday Ali Leks was born at Daika in Mangu Local Government Area of Plateau State. He underwent his basic military training in the Nigerian Defence Academy and was commissioned into the Nigerian Air Force as pilot officer in 1978. AVM Leks attended the Junior Command and Staff Course at the then Command and Staff College, Jaji in 1986. From 1991 – 1992, he attended the Advance Staff Course at Royal Air Force, Bracknell for his Senior Course.',
        'He was a member of the Directing Staff at CSC Jaji from 1994-1996. In 2008, he was appointed the Deputy Commandant, Nigerian Defence Academy, a position he held until his appointment as the Sixteenth Commandant of the Armed Forces Command and Staff College Nigeria on 3 August 2009.',
        'AVM SA Leks is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'at-muazu', no: 17, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'AT Mu’azu', serviceNo: 'NAF/1067',
      post: 'OON DSS psc(+) fwc MSc FNISP', fullName: 'Ahmad Tijjani Mu’azu',
      from: '2010-11-11', to: '2012-11-14', photo: 'assets/commandants/17-at-muazu.jpg',
      facts: [
        { label: 'Born', value: '6 September 1957, Gombe' },
        { label: 'Enlisted', value: '12 July 1976 · Short Service Course 12' },
        { label: 'Commissioned', value: '5 January 1979 · Pilot Officer' }
      ],
      bio: [
        'Air Vice Marshal Ahmad Tijjani Mu’azu was born on 6 September 1957 at Gombe Local Government Area of Gombe state. He enlisted into the Nigerian Air Force on 12 July 1976 as a member of Short Service Course 12. He was commissioned to the rank of Pilot Officer on 5 January 1979 and allotted Pilot Specialty, but later changed to Air Traffic Control. He attended the Junior Division Course at the Command and Staff College Jaji Kaduna, Senior Staff Course at Ghana Armed Forces Command and Staff College Teshie Accra, Ghana.',
        'He was a distinguished member of Directing Staff at the Command and Staff College Jaji. He held several notable appointments some of which include Chief Instructor at the Armed Forces Command and Staff College Jaji and College Secretary National Defence College Abuja. He was appointed the Seventeenth Commandant of the Armed Forces Command and Staff College on 11 November 2010. The senior officer voluntarily retired from the Service on 6 March 2013 after 37 years of meritorious service to the nation.',
        'Air Vice Marshal AT Mu’azu is highly recognised for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'ia-kure', no: 18, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'IA Kure', serviceNo: '',
      post: 'DSS ndc psc(+) ACIPM BSc PGDA MBA MSc', fullName: 'Ibrahim Abdullahi Kure',
      from: '2012-11-14', to: '2012-12-03', photo: 'assets/commandants/18-ia-kure.jpg',
      facts: [
        { label: 'Born', value: '20 February 1959, Lapai, Niger State' },
        { label: 'Cadet course', value: '23 Regular Course, NDA' },
        { label: 'Commissioned', value: '28 June 1980' }
      ],
      bio: [
        'Air Vice Marshal Ibrahim Kure was born on 20 February 1959 in Lapai Local Government of Niger State. He had his primary and secondary education at Capital School Kaduna and Barewa College Zaria. He is a member of the 23 Regular Combatant Course of the Nigerian Defence Academy. He was commissioned into the Nigerian Air Force on 28 June 1980.',
        'He attended the Armed Forces Command and Staff College for both Junior and Senior Courses. He was a member of the Directing Staff at the Prestigious Institution. He was one time the Air Secretary and the Chief of Administration at the Headquarters Nigerian Air Force Abuja. He was appointed as the Eighteenth Commandant of the Armed Forces Command and Staff College on 14 November 2012.',
        'AVM I Kure is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'ee-osim', no: 19, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'EE Osim', serviceNo: '',
      post: 'DSS psc(+) mni', fullName: 'Eko Effiom Osim',
      from: '2012-12-03', to: '2014-01-20', photo: 'assets/commandants/19-ee-osim.jpg',
      facts: [
        { label: 'Born', value: '25 June 1958, Usumutong, Cross River State' },
        { label: 'Enlisted', value: '7 April 1978 · Regular Combatant' }
      ],
      bio: [
        'Air Vice Marshal EE Osim was born on 25 June 1958 at Usumutong, Cross River State. AVM Osim enlisted into the Nigerian Air Force as a Regular Combatant officer on 7 April 1978. He is a graduate of Junior Course 30/1990 and Senior Course 19. He was a member of the Directing Staff at the AFCSC Jaji.',
        'The distinguished Senior Officer held several appointments amongst which include: Senior Air Staff Officer (SASO) HQ Logistics Command and HQ Training Command, as well as Chief of Aircraft Engineering Headquarters Nigerian Air Force. AVM EE Osim was appointed the Nineteenth Commandant of the Armed Forces Command and Staff College Nigeria on 30 November 2012.',
        'AVM EE Osim is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'jc-ifemeje', no: 20, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'JC Ifemeje', serviceNo: '',
      post: 'MoSS FSS MSS DSS BSc psc(+) ndc', fullName: '',
      from: '2014-01-20', to: '2015-08-31', photo: 'assets/commandants/20-jc-ifemeje.jpg',
      facts: [
        { label: 'Born', value: '27 January 1960, Ugah, Anambra State' },
        { label: 'Cadet course', value: '28 Regular Course, NDA' },
        { label: 'Commissioned', value: '1983 · Pilot Officer' }
      ],
      bio: [
        'Air Vice Marshal JC Ifemeje was born on 27 January 1960 at Ugah in Aguata LGA of Anambra State. He was a member of 28 Regular Course and was commissioned into the Nigerian Air Force as a rank of Pilot Officer in 1983. He attended the Junior Staff Course in 1993 and in 1999/2000 was a member of Command and Staff College Jaji Senior Course 22.',
        'The Senior Officer was a member of the Directing Staff at the Armed Forces Command and Staff College. AVM JC Ifemeje held several appointments amongst which are Commander Personnel Management Group Ikeja and Air Secretary HQ NAF Abuja. He was appointed the Twentieth Commandant of the Armed Forces Command and Staff College, Nigeria on 20 January 2014.',
        'AVM JC Ifemeje is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'sa-dambo', no: 21, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'SA Dambo', serviceNo: '',
      post: 'FSS MSS DSS GSS MSc psc(+) ndc', fullName: '',
      from: '2015-08-31', to: '2017-12-28', photo: 'assets/commandants/21-sa-dambo.jpg',
      facts: [
        { label: 'Born', value: '1 January 1962, Katsina State' },
        { label: 'Cadet course', value: '29 Regular Course, NDA' },
        { label: 'Commissioned', value: '1983 · Pilot Officer' }
      ],
      bio: [
        'Air Vice Marshal SA Dambo was born on 1 January 1962 and hails from Katsina State. He is a member of 29 Regular Course of the Nigerian Defence Academy and was commissioned into the Nigerian Air Force as a pilot officer in 1983. He attended both the Junior and Senior Staff courses at the prestigious Armed Forces Command and Staff College Jaji, Nigeria.',
        'The Senior Officer returned to the College as a member of the Directing Staff from July 2001 to June 2003. He was also the Senior Air Staff Officer Training Command, Nigerian Air Force Kaduna from March 2015, a post he held until his appointment as the Twenty First Commandant of the Armed Forces Command and Staff College, Nigeria on 31 August 2015.',
        'AVM SA Dambo is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'ls-alao', no: 22, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'LS Alao', serviceNo: '',
      post: 'FSS MSS DSS GSS psc(+) fndc MNIM MCIPS(UK)', fullName: 'Lawal Shittu Alao',
      from: '2017-12-28', to: '2020-01-15', photo: 'assets/commandants/22-ls-alao.jpg',
      facts: [
        { label: 'Born', value: '2 August 1966, Oyo State' },
        { label: 'Enlisted', value: '1 June 1984 · University Cadet Course 2' },
        { label: 'Commissioned', value: '11 September 1985 · Pilot Officer' }
      ],
      bio: [
        'Air Vice Marshal Lawal Shittu Alao was born on 2 August 1966 and hails from Oyo State. He enlisted into the Nigerian Air Force as a member of University Cadet Course 2 on 1 June 1984 and was commissioned as a regular combatant officer to the rank of pilot officer on 11 September 1985. Air Vice Marshal LS Alao attended the Armed Forces Command and Staff College for his Junior Staff course as a student of Junior Course 40. He further attended the Air Force Command and Staff College Indonesia for his Senior Staff Course from 2000 – 2002.',
        'He was a member of the Directing Staff at the College before being appointed as the Group Logistics Officer of 35 Base Services Group Makurdi. He was thereafter appointed the Chief of Defence Communication Defence Headquarters. He was appointed the Twenty Second Commandant of the Armed Forces Command and Staff College, Nigeria on 28 December 2017.',
        'AVM LS Alao is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'as-liman', no: 23, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'AS Liman', serviceNo: '',
      post: 'DSS psc(++) BSc PGDPA FCAI AMNIM mni FCIPM', fullName: 'Abubakar Sadiq Liman',
      from: '2020-01-15', to: '2021-03-09', photo: 'assets/commandants/23-as-liman.jpg', director: 'AS Liman',
      facts: [
        { label: 'Born', value: '1 January, Lapai, Niger State' },
        { label: 'Cadet course', value: '37 Regular Course, NDA' }
      ],
      bio: [
        'Air Vice Marshal Abubakar Sadiq Liman was born on 1 January in Lapai LGA of Niger State. He is a member of 37 Regular Course of the Nigerian Defence Academy. He started his Primary Engineering Training at 320 Technical Training Group Kaduna now known as Air Force Institute of Technology and went further to attend Type Rating Course on Hughes 300c Helicopter at 115 Special Operations Group Port Harcourt. He also attended the Type Rating Course on Mi-34c Helicopter in Russia.',
        'The Senior Officer also attended the Junior and Senior Staff Courses at this prestigious Armed Forces Command and Staff College Jaji. The Senior Officer returned to the College as a member of the Directing Staff. He was thereafter appointed as a Directing Staff again to Ghana Armed Forces Command and Staff College and as International Peace Support Operations Facilitator at Koffi Annan International Peace Keeping Training Centre Accra. Air Vice Marshal AS Liman was the Commandant NAFRC before being appointed as the Twenty Third Commandant of the Armed Forces Command and Staff College, on 15 January 2020.',
        'AVM AS Liman is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure a conducive environment for improved learning at the College.'
      ]
    },
    {
      id: 'eo-alade', no: 24, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'EO Alade', serviceNo: '',
      post: 'GSS psc fdc(+) MSc CPL mnim pfd', fullName: 'Ebenezer Olayinka Alade',
      from: '2021-03-09', to: '2022-01-07', photo: 'assets/commandants/24-eo-alade.jpg',
      facts: [
        { label: 'Born', value: '5 February 1965, Lagos' },
        { label: 'Cadet course', value: '34 Regular Course, NDA' },
        { label: 'Commissioned', value: 'December 1987 · Pilot Officer' },
        { label: 'Flying hours', value: 'Over 1,000' }
      ],
      bio: [
        'Air Vice Marshal Ebenezer Olayinka Alade was born on 5 Feb 1965 in Lagos. Although his parents are from Ekiti State. He attended Methodist Boys’ High School Lagos for his secondary education before gaining admission into the prestigious Nigeria Defence Academy (NDA) in Jul 83 as a member of 34 Regular Combatant Course. He was commissioned in Dec 87 as a Pilot Officer in the Nigerian Air Force (NAF).',
        'AVM Alade attended 301 Flying Training School (FTS) Kaduna for primary flying training. He was at 303 FTS Kano, and later at the then 88 Military Airlift Group Lagos for Basic Navigation Course. He was also at Aeroservice Aviation Centre Miami, USA for Advanced Navigation Course where he became a Federal Aviation Authority of USA certified Commercial Pilot. He is a Navigator on the C-130 aircraft and also holds a Boeing 737 New Generation rating. He was at the Armed Forces Command and Staff College between Jan - Jun 99 for the Junior Staff Course and Aug 02 - Aug 03 for the Senior Staff Course. He was also at the University of Ibadan for the Masters in Strategic Studies Course following a superlative performance during his Defence Course at National Defence College (NDC) Abuja where he is a Distinguished Fellow. He is currently an external assessor at NDC. AVM Alade is also a member of the National Institute of Management.',
        'AVM Alade has held several appointments in the NAF, prominent among which are: Deputy Director Air Safety HQ NAF. He was also the Chief Military Personnel Officer, United Nations Mission for the Referendum in Western Sahara HQ, Layounne, Western Sahara between Mar - Nov 04. He was a Directing Staff and Director, Department of National and Military Strategy, NDC between Nov 12 and Oct 14. From Oct 14 – May 15 AVM Alade was the Deputy Director Policy HQ NAF and later appointed Director of NAF Transformation. He was also Commander, NAF Base Enugu and later NAF Base Makurdi. He was thereafter redeployed to HQ NAF as the Director of NAF Transformation again. AVM Alade’s last appointment before being appointed Comdt AFCSC Jaji was Director of Plans HQ NAF. AVM Alade has over 1000 flying hours both as a navigator and a pilot.',
        'AVM Alade has won many awards in the course of his various trainings amongst which are: Best graduating Air Force cadet as well as Silver medalist on graduation from Nigerian Defence Academy in 1987. He won the Chief of the Air Force Award for best Service paper at the National Defence College where he later became a Distinguished Alumnus. The Air Vice Marshal is decorated with the following medals; Grand Service Star (GSS), Distinguished Service Star (DSS), Meritorious Service Star (MSS) and Forster Service Star (FSS). He holds a Professional Fellowship Doctorate of the Institute of Economics where he is fellow. AVM Alade is happily married and the union is blessed with children. His hobbies include listening to jazz music, travelling and playing golf.'
      ]
    },
    {
      id: 'oa-tuwase', no: 25, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'OA Tuwase', serviceNo: '',
      post: 'GSS GSM psc(+) fawc(Pak) MSc ATO', fullName: 'Oluroti Anthony Tuwase',
      from: '2022-01-07', to: '2023-01-06', photo: 'assets/commandants/25-oa-tuwase.jpg',
      facts: [
        { label: 'Born', value: '1 December 1965, Onitsha' },
        { label: 'Hometown', value: 'Kabba/Bunu LGA, Kogi State' },
        { label: 'Commissioned', value: 'September 1990 · 37 Regular Course' }
      ],
      bio: [
        'Air Vice Marshal Oluroti Anthony Tuwase was born on 1 Dec 1965 at Onitsha. He hails from Kabba/Bunnu Local Government Area of Kogi State. He was admitted into the Nigerian Defence Academy in 1985 as a member of 37 Regular Combatant course. He was Commissioned in September 1990 as a Pilot Officer in the Nigerian Air Force (NAF). He attended several training courses amongst which include Orientation Engineering Course at the then Technical Training Group now Air Force Institute of Technology. He was type-rated Alpha Jet Engine in 1992 at Air Weapon School at New-Bussa.',
        'The Senior officer also attended the Junior and Senior Staff Course at this prestigious Armed Forces Command and Staff College Jaji. The Senior officer returned to the College as a Directing Staff. AVM OA Tuwase has held several Command, Staff and Instructional appointments, prominent amongst which are; Officer Commanding Armament Squadron, Nigerian Air Force Detachment ECOMOG in Liberia and Sierra Leone, Command Armament Officer HQ Logistics Command Ikeja and Deputy Director Ground Safety HQ NAF. He was also the Commander of the 405 Central Armament Depot and Director of Armament HQ NAF. Air Vice Marshal OA Tuwase was the Director of Procurement Logistic Branch HQ NAF before being appointed as the Twenty Fifth Commandant of the Armed Forces Command and Staff College.',
        'Air Vice Marshal OA Tuwase is highly recognized and honoured for his exemplary leadership, professionalism and great inputs to ensure conducive environment for improved learning at the College.'
      ]
    },
    {
      /* From the portrait on the Hall of Fame wall; no biography supplied yet. */
      id: 'ea-wonah', no: 26, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'EA Wonah', serviceNo: '',
      post: 'GSS FCM CMH psc(+) fdc(+) MSc MEng MNIM FISPON', fullName: '',
      from: '2023-01-05', to: '2023-07-03', photo: 'assets/commandants/26-ea-wonah.jpg',
      facts: [], bio: []
    },
    {
      /* From the portrait on the Hall of Fame wall. Biography from the
         directors' deck (slide 30), which covers both his appointments.
         Also Director Air Warfare 2018–2020 (as Air Cdre HI Alhaji). */
      id: 'hi-alhaji', no: 27, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'HI Alhaji', serviceNo: '',
      post: 'GSS DTM CMH psc(+) fndu nswc BEng MTech MSc', fullName: 'Hassan Ibrahim Alhaji',
      from: '2023-07-03', to: '2026-01-07', photo: 'assets/commandants/27-hi-alhaji.jpg', director: 'HI Alhaji',
      facts: [], bio: [
        "Air Vice Marshal Hassan Ibrahim Alhaji served as the Director of the Department of Air Warfare, Armed Forces Command and Staff College, Jaji, coordinating advanced joint-service tactical airpower training.",
        "The distinguished senior officer later became the Commandant of the Armed Forces Command and Staff College, Jaji, supervising advanced combat and staff development for the entire tri-service officer corps of the federation."
      ]
    }
  ],

  /* The five medallions on the home screen's Commandants panel
     (the third sits in the middle, ringed in gold). */
  homeCommandantPhotos: [
    'assets/commandants/02-jo-bajowa.jpg',
    'assets/commandants/16-sa-leks.jpg',
    'assets/commandants/27-hi-alhaji.jpg',
    'assets/commandants/23-as-liman.jpg',
    'assets/commandants/09-jn-dogonyaro.jpg'
  ],

  services: {
    army: 'Nigerian Army',
    airforce: 'Nigerian Air Force',
    navy: 'Nigerian Navy'
  }
};
