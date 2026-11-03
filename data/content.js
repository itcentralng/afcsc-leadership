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
    tbc: 'To be confirmed',
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
     Source: the caption printed on each portrait in
     Leaders/Directors/CamScanner 03-11-2026 12.56.pdf (one per page).
     ---------------------------------------------------------- */
  directors: [
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'U Mu’azu', post: 'FSS psc', era: 'faculty', from: '1978-04-03', to: '1979-09-25', photo: 'assets/directors/01-gp-capt-u-muazu.jpg' },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'GO Esho', post: 'FSS psc', era: 'faculty', from: '1979-09-24', to: '1981-01-05', photo: 'assets/directors/02-gp-capt-go-esho.jpg' },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'CU Ugah', post: 'FSS psc', era: 'faculty', from: '1981-02-08', to: '1982-02-08', photo: 'assets/directors/03-gp-capt-cu-ugah.jpg' },
    /* The portrait reads "8 Feb 81 - 1 Dec 82"; 81 looks like a slip for 82,
       as Gp Capt Ugah held the post until 8 Feb 82. To be confirmed. */
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'S Magaji', post: 'FSS psc', era: 'faculty', from: '1982-02-08', to: '1982-12-01', photo: 'assets/directors/04-gp-capt-s-magaji.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AH Lawal', post: 'FSS psc mni', era: 'faculty', from: '1982-12-01', to: '1984-01-20', photo: 'assets/directors/05-air-cdre-ah-lawal.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AE Okpere', post: 'FSS psc mni', era: 'faculty', from: '1984-01-20', to: '1986-03-01', photo: 'assets/directors/06-air-cdre-ae-okpere.jpg' },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'A Okpanachi', post: 'FSS psc mni', era: 'faculty', from: '1986-03-01', to: '1988-01-30', photo: 'assets/directors/07-gp-capt-a-okpanachi.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'MM Aliyu', post: 'FSS psc mni', era: 'faculty', from: '1988-07-10', to: '1989-02-21', photo: 'assets/directors/08-air-cdre-mm-aliyu.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Mbaka', post: 'FSS psc mni', era: 'faculty', from: '1989-02-23', to: '1990-09-10', photo: 'assets/directors/09-air-cdre-ja-mbaka.jpg' },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'MA Johnson', post: 'FSS psc mni', era: 'faculty', from: '1990-09-10', to: '1991-03-10', photo: 'assets/directors/10-gp-capt-ma-johnson.jpg' },
    { rank: 'Group Captain', rankShort: 'Gp Capt', name: 'VO Omozokpia', post: 'FSS psc mni', era: 'faculty', from: '1991-03-11', to: '1991-12-03', photo: 'assets/directors/11-gp-capt-vo-omozokpia.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JO Sunmonu', post: 'FSS DSO psc mni', era: 'faculty', from: '1991-12-04', to: '1993-10-07', photo: 'assets/directors/12-air-cdre-jo-sunmonu.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'VC Akiti', post: 'FSS DSO psc(+)', era: 'faculty', from: '1993-10-08', to: '1994-09-26', photo: 'assets/directors/13-air-cdre-vc-akiti.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Akawo', post: 'FSS psc(+) fwc', era: 'faculty', from: '1994-09-26', to: '1997-08-18', photo: 'assets/directors/14-air-cdre-ja-akawo.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'I Abdulrahman', post: 'FSS MSS DSS psc(+)', era: 'faculty', from: '1997-08-18', to: '1998-12-18', photo: 'assets/directors/15-air-cdre-i-abdulrahman.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'EU Okundaye', post: 'DSS psc(+) ndc', era: 'faculty', from: '1999-02-18', to: '1999-07-28', photo: 'assets/directors/16-air-cdre-eu-okundaye.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Kolawole', post: 'FSS MSS DSS psc fwc (MSc)', era: 'faculty', from: '1999-07-28', to: '2001-05-15', photo: 'assets/directors/17-air-cdre-ja-kolawole.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'KR Ekezie', post: 'DSS psc(+) ndc', era: 'faculty', from: '2001-07-26', to: '2003-01-10', photo: 'assets/directors/18-air-cdre-kr-ekezie.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'TM Ato', post: 'DSS psc(+) MSc', era: 'faculty', from: '2003-01-10', to: '2004-02-17', photo: 'assets/directors/19-air-cdre-tm-ato.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'I Danbauchi', post: 'DSS psc(+) fwc LLB MSc', era: 'warfare', from: '2004-02-17', to: '2006-09-08', photo: 'assets/directors/20-air-cdre-i-danbauchi.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'JA Udo', post: 'DSS psc(+) fwc MSc', era: 'warfare', from: '2006-09-08', to: '2007-01-09', photo: 'assets/directors/21-air-cdre-ja-udo.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'SA Leks', post: 'DSS psc(+) fwc MSc', era: 'warfare', from: '2007-01-08', to: '2007-08-08', photo: 'assets/directors/22-air-cdre-sa-leks.jpg', commandant: 'sa-leks' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'MY Oladunni', post: 'DSS psc(+) fwc MSc', era: 'warfare', from: '2007-08-08', to: '2010-01-29', photo: 'assets/directors/23-air-cdre-my-oladunni.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'GO Ekagbo', post: 'DSS psc(+) fndu (PRC)', era: 'warfare', from: '2010-01-30', to: '2012-12-06', photo: 'assets/directors/24-air-cdre-go-ekagbo.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'SG Jeff-Zanni', post: 'DSS psc(+) ndc MSc', era: 'warfare', from: '2012-12-17', to: '2014-10-12', photo: 'assets/directors/25-air-cdre-sg-jeff-zanni.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'NO Oyibo', post: 'DSS psc(+) fdc(+) MSc', era: 'warfare', from: '2014-10-13', to: '2015-02-08', photo: 'assets/directors/26-air-cdre-no-oyibo.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'FM Makinde', post: 'DSS psc(+) ndc MSc ACA', era: 'warfare', from: '2015-02-09', to: '2016-02-16', photo: 'assets/directors/27-air-cdre-fm-makinde.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AS Liman', post: 'FSS MSS DSS psc(++) BSc PGD FCAI mni', era: 'warfare', from: '2016-02-22', to: '2017-05-30', photo: 'assets/directors/28-air-cdre-as-liman.jpg', commandant: 'as-liman' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'NK Kumzhi', post: 'DSS psc(++) fdc MSc', era: 'warfare', from: '2017-05-30', to: '2018-08-27', photo: 'assets/directors/29-air-cdre-nk-kumzhi.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'HI Alhaji', post: 'DSS psc(+) fndu nswc BEng MTech MSc', era: 'warfare', from: '2018-08-28', to: '2020-01-05', photo: 'assets/directors/30-air-cdre-hi-alhaji.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'AY Dari', post: 'DSS psc(+) ndc BSc MDS MSDS AMNIM', era: 'warfare', from: '2020-01-06', to: '2021-03-31', photo: 'assets/directors/31-air-cdre-ay-dari.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'CO Obiabaka', post: 'DSS psc(+) fdc DPA MIASS MBA Law MNIM MSPSP MCIPM', era: 'warfare', from: '2021-03-31', to: '2023-01-06', photo: 'assets/directors/32-air-cdre-co-obiabaka.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'EA Ola', post: 'MSS psc(+) fawc(+) fdc ATO BEng MIADS COREN MNIM', era: 'warfare', from: '2023-01-06', to: '2023-07-10', photo: 'assets/directors/33-air-cdre-ea-ola.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'A Audu', post: 'DSS psc(+) fawc(+) nswc MSc MIADS AMNIM', era: 'warfare', from: '2023-07-10', to: '2025-08-14', photo: 'assets/directors/34-air-cdre-a-audu.jpg' },
    { rank: 'Air Commodore', rankShort: 'Air Cdre', name: 'SM Chindo', post: 'DSS psc(+) ndc(TZ) COREN MMDAS MSS MTech', era: 'warfare', from: '2025-08-15', to: '2026-01-12', photo: 'assets/directors/35-air-cdre-sm-chindo.jpg' }
  ],

  /* ----------------------------------------------------------
     COMMANDANTS — in order of appointment. "no" is the ordinal the
     biography gives (the 24th is not in the documents yet).
     Sources: Leaders/Commandants/profile of Comdts for DLW Hallof Fame.docx,
     "Air Vice Marshal Oluroti Anthony Tuwase.docx" and "Profile AVM EO Alade.doc".
     The wording is the documents' own, except that their closing line
     ("...improved learning in the Army Faculty / Department of Land
     Warfare") now reads "...at the College" for this Air Warfare hall.

     photo: null shows the officer's initials on the College crest until the
     portrait is matched.
     The unnamed photos are in assets/commandants/unidentified/
     (photo-01.png … photo-13.png); see Leaders/Commandants/photo-key.jpg.
     ---------------------------------------------------------- */
  commandants: [
    {
      id: 'go-ejiga', no: 1, service: 'army', rank: 'Major General', rankShort: 'Maj Gen', name: 'GO Ejiga', serviceNo: 'N/230',
      post: 'DSS FSS psc RM NSM GSM', fullName: 'Geoffrey Obiaje Ejiga',
      from: '1975-09-23', to: '1978-09-01', photo: null,
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
      from: '1978-01-01', to: '1979-12-15', photo: null,
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
      from: '1980-03-03', to: '1980-04-15', photo: null,
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
      from: '1981-01-05', to: '1983-07-31', photo: null,
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
      from: '1983-08-01', to: '1984-01-09', photo: null,
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
      from: '1984-01-09', to: '1987-12-30', photo: null,
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
      from: '1987-12-31', to: '1990-09-02', photo: null,
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
      from: '1990-09-03', to: '1992-01-30', photo: null,
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
      from: '1992-01-31', to: '1993-09-20', photo: null,
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
      from: '1993-09-20', to: '1996-07-28', photo: null,
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
      from: '1996-07-29', to: '1999-05-31', photo: null,
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
      from: '1999-07-17', to: '2003-03-30', photo: null,
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
      from: '2003-03-31', to: '2006-01-06', photo: null,
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
      from: '2006-01-06', to: '2008-09-03', photo: null,
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
      from: '2008-10-20', to: '2009-08-03', photo: null,
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
      from: '2009-08-03', to: '2010-11-11', photo: null, director: 'SA Leks',
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
      from: '2010-11-11', to: '2012-11-14', photo: null,
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
      from: '2012-11-14', to: '2012-12-03', photo: null,
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
      from: '2012-11-30', to: '2014-01-20', photo: null,
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
      from: '2014-01-20', to: '2015-08-31', photo: null,
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
      from: '2015-08-31', to: '2017-12-28', photo: null,
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
      from: '2017-12-28', to: '2020-01-15', photo: null,
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
      from: '2020-01-15', to: null, photo: null, director: 'AS Liman',
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
      /* The Twenty Fourth Commandant is not in the documents yet. */
      id: 'pending-24', no: 24, pending: true, service: null, rank: '', rankShort: '', name: '', serviceNo: '',
      post: '', fullName: '', from: null, to: null, photo: null, facts: [], bio: []
    },
    {
      id: 'oa-tuwase', no: 25, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'OA Tuwase', serviceNo: '',
      post: 'GSS GSM psc(+) fawc(Pak) MSc ATO', fullName: 'Oluroti Anthony Tuwase',
      /* The profile says "7 Jan 20", which clashes with AVM Liman's 15 Jan 2020.
         To be confirmed. */
      from: null, to: null, photo: 'assets/commandants/avm-oa-tuwase.jpg',
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
      /* Ordinal and dates are not in the profile. Placed after AVM Tuwase
         as the most recent; to be confirmed. */
      id: 'eo-alade', no: null, service: 'airforce', rank: 'Air Vice Marshal', rankShort: 'AVM', name: 'EO Alade', serviceNo: '',
      post: 'GSS psc fdc(+) MSc CPL mnim pfd', fullName: 'Ebenezer Olayinka Alade',
      from: null, to: null, photo: 'assets/commandants/avm-eo-alade.jpg',
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
    }
  ],

  /* The five medallions on the home screen's Commandants panel
     (the third sits in the middle, ringed in gold). */
  homeCommandantPhotos: [
    'assets/commandants/unidentified/photo-02.png',
    'assets/commandants/avm-oa-tuwase.jpg',
    'assets/commandants/avm-eo-alade.jpg',
    'assets/commandants/unidentified/photo-13.png',
    'assets/commandants/unidentified/photo-07.png'
  ],

  services: {
    army: 'Nigerian Army',
    airforce: 'Nigerian Air Force',
    navy: 'Nigerian Navy'
  }
};
