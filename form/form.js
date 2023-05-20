let department_cache = {}
let dcache_timer = 0

let choose_semester = async (department) => {

  let default_option = document.getElementById("default_semester");
  default_option.text = "*Please Wait*";

  let relev_courses = [];
  for (let course of data["data"]) {
    if (course.department == department) {
      relev_courses.push(course);
    }
  }

  let course_semesters = ["Monsoon 2021", "Spring 2022"]
  for (let course of relev_courses) {
    course_semesters.push(course.semester);
  }
  course_semesters = new Set(course_semesters);
  
  let select = document.getElementById("course_semesters");
  
  // remove current options except *Please Select*
  for(let i = select.options.length - 1; i > 0; i--) {
    select.remove(i);
  }

  // add new options
  for (let course_semester of course_semesters) {
    select.add(new Option(course_semester, course_semester))
  }

  default_option.text = "*Please Select*";
}

let choose_name = async (department) => {

	let default_option = document.getElementById("default_course");
	default_option.text = "*Please Wait*";

	const response = await fetch("https://recourseatashoka.herokuapp.com/api/course?semester=spring%202022&department=" + department);
  	const courses = await response.json();

  	course_names = []
	for (let course of courses.data) {
		course_names.push(course.name);
	}
	course_names = new Set(course_names);
	
	let select = document.getElementById("course_names");
	let options = document.querySelectorAll(".course_names option");
	options.forEach(x => x.remove());
	for (let course_name of course_names) {
		select.add(new Option(course_name, course_name))
	}

	default_option.text = "*Please Select*";
}

let choose_prof = async (course_name) => {
	let default_option = document.getElementById("default_prof");
	default_option.text = "*Please Wait*";

	const response = await fetch("https://recourseatashoka.herokuapp.com/api/course?semester=spring%202022&name=" + course_name);
  	const courses = await response.json();

  	prof_names = []
	for (let course of courses.data) {
		prof_names.push(course.faculty.professors[0].name);
	}
	prof_names = new Set(prof_names);
	
	let select = document.getElementById("prof_names");
	for (let prof_name of prof_names) {
		select.add(new Option(prof_name, prof_name))
	}

	default_option.text = "*Please Select*";
}

let local_choose_semester = async (department) => {

  let default_option = document.getElementById("default_semester");
  default_option.text = "*Please Wait*";

  let relev_courses = [];
  for (let course of data["data"]) {
    if (course.department == department) {
      relev_courses.push(course);
    }
  }

  let course_semesters = ["Monsoon 2021", "Spring 2022"]
  for (let course of relev_courses) {
    course_semesters.push(course.semester);
  }
  course_semesters = new Set(course_semesters);
  
  let select = document.getElementById("course_semesters");
  
  // remove current options except *Please Select*
  for(let i = select.options.length - 1; i > 0; i--) {
    select.remove(i);
  }

  // add new options
  for (let course_semester of course_semesters) {
    select.add(new Option(course_semester, course_semester))
  }

  default_option.text = "*Please Select*";
}

let local_choose_name = async (semester) => {

	let default_option = document.getElementById("default_course");
	default_option.text = "*Please Wait*";

	let relev_courses = [];
	for (let course of data["data"]) {
		if (course.semester == semester) {
			relev_courses.push(course);
		}
	}

  let course_names = []
	for (let course of relev_courses) {
		course_names.push(course.name);
	}
	course_names = new Set(course_names);
	
	let select = document.getElementById("course_names");
	
	// remove current options except *Please Select*
	for(let i = select.options.length - 1; i > 0; i--) {
		select.remove(i);
	}

	// add new options
	for (let course_name of course_names) {
		select.add(new Option(course_name, course_name))
	}

	default_option.text = "*Please Select*";
}

let local_choose_prof = async (course_name) => {
	let default_option = document.getElementById("default_prof");
	default_option.text = "*Please Wait*";

	let relev_courses = [];
	for (let course of data["data"]) {
		if (course.name == course_name) {
			relev_courses.push(course);
		}
	}

  	prof_names = []
	for (let course of relev_courses) {
		prof_names.push(course.faculty.professors[0].name);
	}
	prof_names = new Set(prof_names);
	
	let select = document.getElementById("prof_names");

	// remove current options except *Please Select*
	for(let i = select.options.length - 1; i > 0; i--) {
		select.remove(i);
	}

	// add new options
	for (let prof_name of prof_names) {
		select.add(new Option(prof_name, prof_name))
	}

	default_option.text = "*Please Select*";
}

let data = {
  data: [
    {
      name: "Introduction to Computer Programming",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Subhashis Banerjee",
            email: "suban@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e629"
          }
        ],
        TFs: [
          {
            name: "Aditi Jain",
            email: "aditi.jain_ug22@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e62a"
          },
          {
            name: "Chhavi",
            email: "chhavi_ug22@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e62b"
          },
          {
            name: "Diya Khurdiya",
            email: "diya.khurdiya_ug23@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e62c"
          },
          {
            name: "Esha Manchanda",
            email: "esha.manchanda_ug23@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e62d"
          },
          {
            name: "Niranjan Rajesh",
            email: "niranjan.rajesh_ug23@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e62e"
          },
          {
            name: "Satyakin Kohli",
            email: "satyakin.kohli_ug22@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e62f"
          },
          {
            name: "Veda D",
            email: "veda.d_ug22@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e630"
          },
          {
            name: "Vrinda Khandelwal",
            email: "vrinda.khandelwal_asp22@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e631"
          }
        ]
      }
    },
    {
      name: "Mathematics for Economists",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Priyanka Arora",
            email: "priyanka.arora1@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e639"
          }
        ],
        TFs: [
          {
            name: "Sawal Choudhary",
            email: "sawal.choudhary_tf@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e63a"
          }
        ]
      }
    },
    {
      name: "Mathematics for Economists",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Priyanka Arora",
            email: "priyanka.arora1@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e634"
          }
        ],
        TFs: [
          {
            name: "Sawal Choudhary",
            email: "sawal.choudhary_tf@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e635"
          }
        ]
      }
    },
    {
      name: "Mathematics for Economists",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Anuradha Saha",
            email: "anuradha.saha@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e63e"
          }
        ],
        TFs: [
          {
            name: "Aditya Vikram",
            email: "aditya.vikram_tf@ashoka.edu.in",
            _id: "6221a119ed935d0be7d2e63f"
          }
        ]
      }
    },
    {
      name: "Mathematics for Economists",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Anuradha Saha",
            email: "anuradha.saha@ashoka.edu.in",
            _id: "6221a11bed935d0be7d2e643"
          }
        ],
        TFs: [
          {
            name: "Aditya Vikram",
            email: "aditya.vikram_tf@ashoka.edu.in",
            _id: "6221a11bed935d0be7d2e644"
          }
        ]
      }
    },
    {
      name: "Mathematics for Economists",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Amit Kumar Goyal",
            email: "amit.goyal@ashoka.edu.in",
            _id: "6221a14d86b731a77aeee9df"
          }
        ],
        TFs: [
          {
            name: "Satyen Pandita",
            email: "satyen.pandita_tf@ashoka.edu.in",
            _id: "6221a14d86b731a77aeee9e0"
          }
        ]
      }
    },
    {
      name: "Mathematics for Economists",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Amit Kumar Goyal",
            email: "amit.goyal@ashoka.edu.in",
            _id: "6221a14d86b731a77aeee9e3"
          }
        ],
        TFs: [
          {
            name: "Satyen Pandita",
            email: "satyen.pandita_tf@ashoka.edu.in",
            _id: "6221a14d86b731a77aeee9e4"
          }
        ]
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Shamini Kothari",
            email: "shamini.kothari@ashoka.edu.in",
            _id: "623ebb114aa9cf5d0090f4a5"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Shamini Kothari",
            email: "shamini.kothari@ashoka.edu.in",
            _id: "623ebb144aa9cf5d0090f4b0"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Forms of Literature",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Jonathan Gil Harris",
            email: "jgharris@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d71d"
          }
        ],
        TFs: [
          {
            name: "Angana Sinha Ray",
            email: "angana.sinharay_ma23@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d71e"
          },
          {
            name: "Salik Basharat",
            email: "salik.basharat_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d71f"
          }
        ]
      }
    },
    {
      name: "Indian Civilisations",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Gopalkrishna Gandhi",
            email: "gopalkrishna.gandhi@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d728"
          },
          {
            name: "Rudrangshu Mukherjee",
            email: "rudrangshu.mukherjee@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d729"
          }
        ],
        TFs: [
          {
            name: "Heeral Chhabra",
            email: "heeral.chhabra_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d72a"
          },
          {
            name: "Piyush Kumar Tiwari",
            email: "piyush.tiwari_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d72b"
          },
          {
            name: "Ufaque Pariker Paiker",
            email: "ufaque.paiker_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d72c"
          }
        ]
      }
    },
    {
      name: "Forms of Literature",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Mali Annika Skotheim",
            email: "mali.skotheim@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d722"
          }
        ],
        TFs: [
          {
            name: "Brinda Sarma",
            email: "brinda.sarma_ma22@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d723"
          },
          {
            name: "Shree Thaarshini Sriraman",
            email: "shree.sriraman_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d724"
          }
        ]
      }
    },
    {
      name: "Mind and Behaviour",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Kranti Saran",
            email: "saran@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d736"
          }
        ],
        TFs: [
          {
            name: "Abhiraj Singh",
            email: "abhiraj.singh_tf@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d737"
          }
        ]
      }
    },
    {
      name: "Indian Civilisations",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Upinder Singh",
            email: "upinder.singh@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d730"
          }
        ],
        TFs: [
          {
            name: "Mercy Dutta",
            email: "mercy.dutta_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d731"
          },
          {
            name: "Nivedita Chaturvedi",
            email: "nivedita.chaturvedi_tf@ashoka.edu.in",
            _id: "62417c53d0f6703b61f4d732"
          }
        ]
      }
    },
    {
      name: "Mind and Behaviour",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Arpan Banerjee ",
            email: "arpan.banerjee@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d73b"
          },
          {
            name: "Nandini Chatterjee Singh ",
            email: "nandini.singh@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d73c"
          }
        ],
        TFs: [
          {
            name: "Aakriti",
            email: "aakriti_ug22@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d73d"
          },
          {
            name: "Anukruti Singh",
            email: "anukruti.singh_ug22@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d73e"
          },
          {
            name: "Bodhisatwa Chaudhuri",
            email: "bodhisatwa.chaudhuri_tf@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d73f"
          },
          {
            name: "Hansika Chhabra",
            email: "hansika.chhabra_tf@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d740"
          },
          {
            name: "Lasya Adiraj",
            email: "lasya.adiraj_ug22@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d741"
          }
        ]
      }
    },
    {
      name: "European History: Renaissance to Revolution",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Rudrangshu Mukherjee",
            email: "rudrangshu.mukherjee@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d745"
          }
        ],
        TFs: [
          {
            name: "Saurabh Vatsa",
            email: "saurabh.vatsa_tf@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d746"
          },
          {
            name: "Ufaque Pariker Paiker",
            email: "ufaque.paiker_tf@ashoka.edu.in",
            _id: "62417c54d0f6703b61f4d747"
          }
        ]
      }
    },
    {
      name: "Introduction to Psychology",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Annette Theresa Taylor",
            email: "annette.taylor@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d74b"
          }
        ],
        TFs: [
          {
            name: "Anushri Ganguly",
            email: "anushri.ganguly_asp22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d74c"
          },
          {
            name: "Nivedita Salar",
            email: "nivedita.salar_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d74d"
          },
          {
            name: "Shivangi Singh",
            email: "shivangi.singh_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d74e"
          },
          {
            name: "Siddharth Thakeria",
            email: "siddharth.thakeria_mls22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d74f"
          },
          {
            name: "Surabhi Katyal",
            email: "surabhi.katyal_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d750"
          }
        ]
      }
    },
    {
      name: "CTS-Mathematics: Introduction to Proofs",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Maya Saran",
            email: "maya.saran@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d754"
          }
        ],
        TFs: [
          {
            name: "Deepshikha Chatterjee",
            email: "deepshikha.chatterjee_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d755"
          }
        ]
      }
    },
    {
      name: "Making the World:Introduction to International Relations",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Deep Pal",
            email: "deep.pal@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d759"
          }
        ],
        TFs: [
          {
            name: "Tanvee Shehrawat",
            email: "tanvee.shehrawat_ug22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d75a"
          }
        ]
      }
    },
    {
      name: "Symbolic Logic",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Eric Paul Snyder",
            email: "eric.snyder@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d75e"
          }
        ],
        TFs: [
          {
            name: "Deepanshu Singal",
            email: "deepanshu.singal_ug22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d75f"
          },
          {
            name: "Tarun Thapar",
            email: "tarun.thapar_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d760"
          }
        ]
      }
    },
    {
      name: "Statistics and Research Methods I",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Krishna Venkata Melnattur",
            email: "krishna.melnattur@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d764"
          }
        ],
        TFs: [
          {
            name: "Anjana Ashok",
            email: "anjana.ashok_ug22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d765"
          },
          {
            name: "Shivangi Singh",
            email: "shivangi.singh_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d766"
          }
        ]
      }
    },
    {
      name: "Statistics and Research Methods I",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Krishna Venkata Melnattur",
            email: "krishna.melnattur@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d76a"
          }
        ],
        TFs: [
          {
            name: "Nivedita Singhal",
            email: "nivedita.singhal_asp22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d76b"
          },
          {
            name: "Senna Singh",
            email: "senna.singh_phd21@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d76c"
          },
          {
            name: "Svasti Dutta",
            email: "svasti.dutta_asp22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d76d"
          }
        ]
      }
    },
    {
      name: "Cognitive Psychology",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Amrendra Pratap Singh",
            email: "amrendra.singh@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d771"
          }
        ],
        TFs: [
          {
            name: "Ashwin Ramaswamy",
            email: "ashwin.ramaswamy_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d772"
          },
          {
            name: "Paridhi Verma",
            email: "paridhi.verma_phd21@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d773"
          }
        ]
      }
    },
    {
      name: "Social Psychology",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Sramana Majumdar",
            email: "sramana.majumdar@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d777"
          }
        ],
        TFs: [
          {
            name: "Harshita Bedi",
            email: "harshita.bedi_ug22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d778"
          },
          {
            name: "Vedika Puri",
            email: "vedika.puri_asp22@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d779"
          },
          {
            name: "Vidushi Rijuta",
            email: "vidushi.rijuta_tf@ashoka.edu.in",
            _id: "62417c55d0f6703b61f4d77a"
          }
        ]
      }
    },
    {
      name: "Introduction to Creative Writing",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Janice Erica Pariat",
            email: "janice.pariat@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d77e"
          }
        ],
        TFs: [
          {
            name: "Bharathi A Panicker",
            email: "bharathi.apanicker_asp22@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d77f"
          },
          {
            name: "Esha Sinha",
            email: "esha.sinha_ug22@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d780"
          }
        ]
      }
    },
    {
      name: "Introduction to Creative Writing",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Sumana Roy Ghosh",
            email: "sumana.roy@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d784"
          }
        ],
        TFs: [
          {
            name: "Chirodip Naha",
            email: "chirodip.naha_asp22@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d785"
          },
          {
            name: "Kayan Dadyburjor",
            email: "kayan.dadyburjor_ug22@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d786"
          }
        ]
      }
    },
    {
      name: "Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Subrata Kumar Ritadhi",
            email: "sk.ritadhi@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d78a"
          }
        ],
        TFs: [
          {
            name: "Partha Bandopadhyay",
            email: "partha.bandopadhyay_tf@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d78b"
          }
        ]
      }
    },
    {
      name: "Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Subrata Kumar Ritadhi",
            email: "sk.ritadhi@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d78f"
          }
        ],
        TFs: [
          {
            name: "Partha Bandopadhyay",
            email: "partha.bandopadhyay_tf@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d790"
          }
        ]
      }
    },
    {
      name: "Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bipasha Maity",
            email: "bipasha.maity@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d794"
          }
        ],
        TFs: [
          {
            name: "Deepanshi Singh",
            email: "deepanshi.singh_tf@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d795"
          }
        ]
      }
    },
    {
      name: "Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bipasha Maity",
            email: "bipasha.maity@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d799"
          }
        ],
        TFs: [
          {
            name: "Deepanshi Singh",
            email: "deepanshi.singh_tf@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d79a"
          }
        ]
      }
    },
    {
      name: "Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Anisha Sharma",
            email: "anisha.sharma@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d79e"
          }
        ],
        TFs: [
          {
            name: "Anandita Bardia",
            email: "anandita.bardia_tf@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d79f"
          }
        ]
      }
    },
    {
      name: "Algebra II",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Pritam Ghosh",
            email: "pritam.ghosh@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d7a3"
          }
        ],
        TFs: [
          {
            name: "Deepshikha Chatterjee",
            email: "deepshikha.chatterjee_tf@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d7a4"
          }
        ]
      }
    },
    {
      name: "Developing Performance Skills",
      department: "PA",
      faculty: {
        professors: [
          {
            name: "Navtej Johar",
            email: "navtej.johar@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d7a8"
          },
          {
            name: "Thomas Michael Mccarthy",
            email: "justin.mccarthy@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d7a9"
          },
          {
            name: "Uma Katju",
            email: "uma.katju@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d7aa"
          }
        ],
        TFs: [
          {
            name: "Rohan Manoj",
            email: "rohan.manoj_ug22@ashoka.edu.in",
            _id: "62417c56d0f6703b61f4d7ab"
          }
        ]
      }
    },
    {
      name: "Developmental Psychology",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7af"
          }
        ],
        TFs: [
          {
            name: "Anandita Liddhoo",
            email: "anandita.lidhoo_tf@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b0"
          },
          {
            name: "Paridhi Verma",
            email: "paridhi.verma_phd21@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b1"
          },
          {
            name: "Peerzada Muhammad Abdal",
            email: "peerzada.abdal_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b2"
          },
          {
            name: "Rhea Anu Thomson",
            email: "rhea.thomson_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b3"
          },
          {
            name: "Swetha Alachi",
            email: "swetha.alachi_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b4"
          }
        ]
      }
    },
    {
      name: "Statistics and Research Methods II",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Rashmi Nair",
            email: "rashmi.nair@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b8"
          }
        ],
        TFs: [
          {
            name: "Sahana Hegde",
            email: "sahana.hegde_tf@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7b9"
          },
          {
            name: "Sanskriti Shrivastava",
            email: "sanskriti.shrivastava_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7ba"
          },
          {
            name: "Tanya Parvez Battiwalla",
            email: "tanya.battiwalla_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7bb"
          }
        ]
      }
    },
    {
      name: "Clinical Psychology",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7bf"
          }
        ],
        TFs: [
          {
            name: "Jenya Wadhwani",
            email: "jenya.wadhwani_ug22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c0"
          },
          {
            name: "Mohona Roy",
            email: "mohona.roy_phd21@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c1"
          },
          {
            name: "Prerana Jain",
            email: "prerana.jain_ug22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c2"
          }
        ]
      }
    },
    {
      name: "Introduction to Finance",
      department: "FIN",
      faculty: {
        professors: [
          {
            name: "S K Shanthi",
            email: "sk.shanthi@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c6"
          }
        ],
        TFs: [
          {
            name: "Ananya Bawa",
            email: "ananya.bawa_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c7"
          },
          {
            name: "Ose Singh Bansal",
            email: "ose.bansal_ug22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c8"
          },
          {
            name: "Parth Mandhana",
            email: "parth.mandhana_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7c9"
          },
          {
            name: "Richik Bandyopadhyay",
            email: "richik.bandyopadhyay_tf@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7ca"
          }
        ]
      }
    },
    {
      name: "Introduction to Finance",
      department: "FIN",
      faculty: {
        professors: [
          {
            name: "S K Shanthi",
            email: "sk.shanthi@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7ce"
          }
        ],
        TFs: [
          {
            name: "Ananya Bawa",
            email: "ananya.bawa_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7cf"
          },
          {
            name: "Ose Singh Bansal",
            email: "ose.bansal_ug22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7d0"
          },
          {
            name: "Parth Mandhana",
            email: "parth.mandhana_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7d1"
          },
          {
            name: "Richik Bandyopadhyay",
            email: "richik.bandyopadhyay_tf@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7d2"
          }
        ]
      }
    },
    {
      name: "Economics of Food Security",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bharat Ramaswami",
            email: "bharat.ramaswami@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7d6"
          }
        ],
        TFs: [
          {
            name: "Vidhyarth Krishna Natarajan",
            email: "vidhyarthkrishna.natarajan_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7d7"
          }
        ]
      }
    },
    {
      name: "Economics of Food Security",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bharat Ramaswami",
            email: "bharat.ramaswami@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7db"
          }
        ],
        TFs: [
          {
            name: "Sanjana Hira",
            email: "sanjana.hira_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7dc"
          },
          {
            name: "Sawal Choudhary",
            email: "sawal.choudhary_tf@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7dd"
          }
        ]
      }
    },
    {
      name: "Public Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bhanu Gupta",
            email: "bhanu.gupta@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7e1"
          }
        ],
        TFs: [
          {
            name: "Satyam Kumar Rai",
            email: "satyamkumarrai_phd20@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7e2"
          },
          {
            name: "Tarini Dewan",
            email: "tarini.dewan_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7e3"
          }
        ]
      }
    },
    {
      name: "Public Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bhanu Gupta",
            email: "bhanu.gupta@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7e7"
          }
        ],
        TFs: [
          {
            name: "Riya Chaturvedi",
            email: "riya.chaturvedi_asp22@ashoka.edu.in",
            _id: "62417c57d0f6703b61f4d7e8"
          }
        ]
      }
    },
    {
      name: "Elementary Differential Geometry",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Pritam Ghosh",
            email: "pritam.ghosh@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7ec"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Multivariable Calculus",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Rajendra Bhatia",
            email: "rajendra.bhatia@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7f0"
          },
          {
            name: "Sourav Ghosh",
            email: "sourav.ghosh@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7f1"
          }
        ],
        TFs: [
          {
            name: "Maruf Alam Tarafdar",
            email: "maruf.tarafdar_tf@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7f2"
          },
          {
            name: "Utsav Goel",
            email: "utsav.goel_tf@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7f3"
          }
        ]
      }
    },
    {
      name: "Computer Security and Privacy",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Mahabir Prasad Jhanwar",
            email: "mahavir.jhawar@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7f7"
          }
        ],
        TFs: [
          {
            name: "Abhinav Nakarmi",
            email: "abhinav.nakarmi_asp22@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7f8"
          }
        ]
      }
    },
    {
      name: "Operating Systems",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Anirban Mondal",
            email: "anirban.mondal@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7fc"
          }
        ],
        TFs: [
          {
            name: "Akhil Kumar",
            email: "akhil.kumar_asp22@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d7fd"
          }
        ]
      }
    },
    {
      name: "Theory of Computation",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Soumyottam Chatterjee",
            email: "soumyottam.chatterjee@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d801"
          }
        ],
        TFs: [
          {
            name: "Shweta Prasad",
            email: "shweta.prasad_asp22@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d802"
          }
        ]
      }
    },
    {
      name: "Fourier Series",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Krishna Maddaly",
            email: "krishna.maddaly@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d806"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Social Entrepreneurship and Impact",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Ankur Sarin",
            email: "ankur.sarin@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d80a"
          },
          {
            name: "Benedicte Faivretavignot",
            email: "benedicte.faivretavignot@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d80b"
          },
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d80c"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d80d"
          }
        ],
        TFs: [
          {
            name: "Shubha Mahajan",
            email: "shubha.mahajan_tf@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d80e"
          },
          {
            name: "Shubha Mahajan",
            email: "shubha.mahajan_ugta@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d80f"
          }
        ]
      }
    },
    {
      name: "Cultivating an Entrepreneurial Mindset",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Mukesh Sud",
            email: "mukesh.sud@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d813"
          },
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d814"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d815"
          }
        ],
        TFs: []
      }
    },
    {
      name: "International Security",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Srinath Raghavan",
            email: "srinath.raghavan@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d819"
          }
        ],
        TFs: [
          {
            name: "Kesar Majethia",
            email: "kesar.majethia_asp22@ashoka.edu.in",
            _id: "62417c58d0f6703b61f4d81a"
          }
        ]
      }
    },
    {
      name: "Quantitative Reasoning and Mathematical Thinking",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Gaurav Bhatnagar",
            email: "gaurav.bhatnagar@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d81e"
          }
        ],
        TFs: [
          {
            name: "Shivam Sahu",
            email: "shivam.sahu_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d81f"
          },
          {
            name: "Sonakshi Chaudhary",
            email: "sonakshi.chaudhary_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d820"
          }
        ]
      }
    },
    {
      name: "Quantitative Reasoning and Mathematical Thinking",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Gautam Iqbal Menon",
            email: "gautam.menon@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d824"
          }
        ],
        TFs: [
          {
            name: "Deepak Chaurasiya",
            email: "deepak.chaurasiya_ug22@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d825"
          },
          {
            name: "Gaurang Garg",
            email: "gaurang.garg_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d826"
          }
        ]
      }
    },
    {
      name: "Everyday Life in South Asia",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Ravindran S",
            email: "ravindran.sriramachandran@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d82a"
          }
        ],
        TFs: [
          {
            name: "Anagha Vishnu",
            email: "anagha.vishnu_asp22@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d82b"
          }
        ]
      }
    },
    {
      name: "Algorithm Design and Analysis",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d82f"
          }
        ],
        TFs: [
          {
            name: "Arup Mondal",
            email: "arup.mondal_phd19@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d830"
          },
          {
            name: "Ritul Satish",
            email: "ritul.satish_ug22@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d831"
          }
        ]
      }
    },
    {
      name: "Advanced Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Kanika Mahajan",
            email: "kanika.mahajan@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d835"
          }
        ],
        TFs: [
          {
            name: "Partha Bandopadhyay",
            email: "partha.bandopadhyay_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d836"
          }
        ]
      }
    },
    {
      name: "Environmental Studies",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Ghazala Shahabuddin",
            email: "ghazala.shahabuddin@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d83a"
          }
        ],
        TFs: [
          {
            name: "Mahima Malik",
            email: "mahima.malik_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d83b"
          },
          {
            name: "Sanjana Nair",
            email: "sanjana.nair_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d83c"
          }
        ]
      }
    },
    {
      name: "Environmental Studies",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Mukul Sharma",
            email: "mukul.sharma@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d840"
          }
        ],
        TFs: [
          {
            name: "Arunopol Seal",
            email: "arunopol.seal_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d841"
          },
          {
            name: "Mayank Kumar Sharma",
            email: "mayank.sharma_ug22@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d842"
          },
          {
            name: "Sital Kumar",
            email: "sital.kumar_asp22@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d843"
          },
          {
            name: "Sweeta Suman",
            email: "sweeta.sumant_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d844"
          }
        ]
      }
    },
    {
      name: "Environmental Studies",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Anshu Ogra ",
            email: "anshu.ogra@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d848"
          },
          {
            name: "Sonali Bawa",
            email: "sonali.bawa@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d849"
          }
        ],
        TFs: [
          {
            name: "Hamza Farooqui",
            email: "hamza.farooqui_tf@ashoka.edu.in",
            _id: "62417c59d0f6703b61f4d84a"
          }
        ]
      }
    },
    {
      name: "Creativity and Design Thinking",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d84e"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d84f"
          }
        ],
        TFs: [
          {
            name: "Aditi Tibarewal",
            email: "aditi.tibarewal_ug22@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d850"
          }
        ]
      }
    },
    {
      name: "Econometrics 1",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Kanika Mahajan",
            email: "kanika.mahajan@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d854"
          }
        ],
        TFs: [
          {
            name: "Deepanshi Singh",
            email: "deepanshi.singh_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d855"
          }
        ]
      }
    },
    {
      name: "Introduction to Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Sneha Bakshi",
            email: "sneha.bakshi@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d859"
          }
        ],
        TFs: [
          {
            name: "Ayush Kumar",
            email: "ayush.kumar_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d85a"
          }
        ]
      }
    },
    {
      name: "Introduction to Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Sneha Bakshi",
            email: "sneha.bakshi@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d85e"
          }
        ],
        TFs: [
          {
            name: "Ayush Kumar",
            email: "ayush.kumar_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d85f"
          }
        ]
      }
    },
    {
      name: "Introduction to Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Ayush Pant",
            email: "ayush.pant@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d863"
          }
        ],
        TFs: [
          {
            name: "Richik Bandyopadhyay",
            email: "richik.bandyopadhyay_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d864"
          }
        ]
      }
    },
    {
      name: "Introduction to Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Ayush Pant",
            email: "ayush.pant@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d868"
          }
        ],
        TFs: [
          {
            name: "Ayush Kumar",
            email: "ayush.kumar_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d869"
          }
        ]
      }
    },
    {
      name: "Introduction to Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Komal Malik",
            email: "komal.malik@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d86d"
          }
        ],
        TFs: [
          {
            name: "Dyuti Bhattacharya",
            email: "dyuti.bhattacharya_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d86e"
          }
        ]
      }
    },
    {
      name: "Introduction to Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Komal Malik",
            email: "komal.malik@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d872"
          }
        ],
        TFs: [
          {
            name: "Satyen Pandita",
            email: "satyen.pandita_tf@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d873"
          }
        ]
      }
    },
    {
      name: "Political Economy",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Sabyasachi Das",
            email: "sabyasachi.das@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d877"
          }
        ],
        TFs: [
          {
            name: "Rohin Mukherjee",
            email: "rohin.mukherjee_asp22@ashoka.edu.in",
            _id: "62417c5ad0f6703b61f4d878"
          }
        ]
      }
    },
    {
      name: "Mathematical Physics 1: Mathematical and Computational Toolkit",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Vikram Vyas",
            email: "vikram.vyas@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d87c"
          }
        ],
        TFs: [
          {
            name: "Umang Kumar",
            email: "umang.kumar_phd21@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d87d"
          }
        ]
      }
    },
    {
      name: "Physics Lab 1:Introduction to Physics through Experiments",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Bikram Phookun",
            email: "bikram.phookun@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d881"
          }
        ],
        TFs: [
          {
            name: "Riya Mehta",
            email: "riya.mehta_phd21@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d882"
          },
          {
            name: "Vishnupriya A",
            email: "vishnupriya.a_asp22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d883"
          },
          {
            name: "Yogesh Pratap",
            email: "yogesh.pratap_asp22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d884"
          }
        ]
      }
    },
    {
      name: "Physics Lab 1:Introduction to Physics through Experiments",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Susmita Saha",
            email: "susmita.saha@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d888"
          }
        ],
        TFs: [
          {
            name: "Ankit Wenju Shrestha",
            email: "ankit.shrestha_ug22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d889"
          },
          {
            name: "Munaza Rashid",
            email: "munaza.rashid_tf@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d88a"
          },
          {
            name: "Risham Kaur Parmar",
            email: "risham.parmar_asp22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d88b"
          }
        ]
      }
    },
    {
      name: "Discrete Mathematics",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Goutam Kumar Paul",
            email: "goutam.paul@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d88f"
          }
        ],
        TFs: [
          {
            name: "Harshita Sharma",
            email: "harshita.sharma_ug23@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d890"
          },
          {
            name: "Vaibhav Maurya",
            email: "vaibhav.maurya_ug23@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d891"
          }
        ]
      }
    },
    {
      name: "Discrete Mathematics",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Soumyottam Chatterjee",
            email: "soumyottam.chatterjee@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d895"
          }
        ],
        TFs: [
          {
            name: "Essosolim Apollinaire Abi",
            email: "essosolim.abi_asp22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d896"
          },
          {
            name: "Saransh Kumar Gupta",
            email: "saransh.gupta_mls22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d897"
          }
        ]
      }
    },
    {
      name: "Data Mining and Warehousing",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Anirban Mondal",
            email: "anirban.mondal@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d89b"
          }
        ],
        TFs: [
          {
            name: "Alfred Daimari",
            email: "alfred.daimari_ug22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d89c"
          },
          {
            name: "Manish Yadav",
            email: "manish.yadav_ug22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d89d"
          },
          {
            name: "Tanvi Roy",
            email: "tanvi.roy_ug22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d89e"
          }
        ]
      }
    },
    {
      name: "Introduction to Indian Politics",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Rahul Verma",
            email: "rahul.verma@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8a2"
          }
        ],
        TFs: [
          {
            name: "Kripi Dua",
            email: "kripi.dua_ug22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8a3"
          },
          {
            name: "Shamik Vatsa",
            email: "shamik.vatsa_tf@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8a4"
          },
          {
            name: "Shreyashree Nayak",
            email: "shreyashree.nayak_asp22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8a5"
          }
        ]
      }
    },
    {
      name: "Introduction to Indian Politics",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Rahul Verma",
            email: "rahul.verma@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8a9"
          }
        ],
        TFs: [
          {
            name: "Dipanita Malik",
            email: "dipanita.malik_ug22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8aa"
          },
          {
            name: "Pawas Pratikshit",
            email: "pawas.pratikshit_asp22@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8ab"
          },
          {
            name: "Shamik Vatsa",
            email: "shamik.vatsa_tf@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8ac"
          }
        ]
      }
    },
    {
      name: "English Graduate Proseminar: Thesis Writing",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Alexandra Cassatt Verini",
            email: "alexandra.verini@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8b0"
          }
        ],
        TFs: [
          {
            name: "Nazish Ashraf Mir",
            email: "nazish.mir_ga@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8b1"
          },
          {
            name: "Nazish Ashraf Mir",
            email: "nazish.mir_phd20@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8b2"
          },
          {
            name: "Pia Bakshi",
            email: "pia.bakshi_ga@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8b3"
          },
          {
            name: "Pia Bakshi",
            email: "pia.bakshi_phd20@ashoka.edu.in",
            _id: "62417c5bd0f6703b61f4d8b4"
          }
        ]
      }
    },
    {
      name: "Introduction to Biology I: Genetics and Evolution",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Imroze Khan",
            email: "imroze.khan@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8b8"
          }
        ],
        TFs: [
          {
            name: "Amrita Bhattacharya",
            email: "amrita.bhattacharya_phd21@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8b9"
          },
          {
            name: "Basabi Bagchi",
            email: "basabi.bagchi_phd17@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8ba"
          },
          {
            name: "Srijan Seal",
            email: "srijan.seal_phd19@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8bb"
          }
        ]
      }
    },
    {
      name: "Introduction to Comparative Politics",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Kaustav Chakrabarti",
            email: "kaustav.chakrabarti@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8bf"
          }
        ],
        TFs: [
          {
            name: "Abhiir Bhalla",
            email: "abhiir.bhalla_ug22@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8c0"
          },
          {
            name: "Prerna Vij",
            email: "prerna.vij_asp22@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8c1"
          },
          {
            name: "Shruti Jargad",
            email: "shruti.jargad_tf@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8c2"
          }
        ]
      }
    },
    {
      name: "Microeconomics 2",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Ratul Lahkar",
            email: "ratul.lahkar@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8c6"
          }
        ],
        TFs: [
          {
            name: "Mahima Mukhija",
            email: "mahima.mukhija_phd19@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8c7"
          }
        ]
      }
    },
    {
      name: "Macroeconomics 2",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Rahul Nath",
            email: "rahul.nath@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8cb"
          }
        ],
        TFs: [
          {
            name: "Sakshi Satija",
            email: "sakshi.satija_phd19@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8cc"
          }
        ]
      }
    },
    {
      name: "Financial Markets and Asset Pricing",
      department: "FIN",
      faculty: {
        professors: [
          {
            name: "Arghya Bhattacharya",
            email: "arghya.bhattacharya@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8d0"
          }
        ],
        TFs: [
          {
            name: "Aanya Poddar",
            email: "aanya.poddar_asp22@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8d1"
          },
          {
            name: "Aditya Vikram",
            email: "aditya.vikram_tf@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8d2"
          }
        ]
      }
    },
    {
      name: "Financial Markets and Asset Pricing",
      department: "FIN",
      faculty: {
        professors: [
          {
            name: "Arghya Bhattacharya",
            email: "arghya.bhattacharya@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8d6"
          }
        ],
        TFs: [
          {
            name: "Aditya Vikram",
            email: "aditya.vikram_tf@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8d7"
          },
          {
            name: "Aneesha Chandra",
            email: "aneesha.chandra_asp22@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8d8"
          }
        ]
      }
    },
    {
      name: "Political Economy",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Sabyasachi Das",
            email: "sabyasachi.das@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8dc"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Behavioral Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Srijita Ghosh",
            email: "srijita.ghosh@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8e0"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Advanced Machine Learning",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Lipika Dey",
            email: "lipika.dey@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8e4"
          },
          {
            name: "Tirthankar Dasgupta",
            email: "tirthankar.dasgupta@ashoka.edu.in",
            _id: "62417c5cd0f6703b61f4d8e5"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Mathematical Physics 2",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Amin Ahmad Nizami",
            email: "amin.nizami@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8e9"
          },
          {
            name: "Suratna Das",
            email: "suratna.das@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8ea"
          }
        ],
        TFs: [
          {
            name: "Souradeep Sengupta",
            email: "souradeep.sengupta_phd20@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8eb"
          }
        ]
      }
    },
    {
      name: "Oscillations,Waves,and Optics",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Garima Mishra",
            email: "garima.mishra@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8ef"
          },
          {
            name: "Philip Cherian",
            email: "philip.cherian@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8f0"
          }
        ],
        TFs: [
          {
            name: "Philip Cherian",
            email: "philip.cherian_phd21@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8f1"
          }
        ]
      }
    },
    {
      name: "Biology Lab 3",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Kasturi Pal",
            email: "kasturi.pal@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8f5"
          }
        ],
        TFs: [
          {
            name: "Debodyuti Mondal",
            email: "debodyuti.mondal_phd19@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8f6"
          }
        ]
      }
    },
    {
      name: "Macroeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Pubali Chakraborty",
            email: "pubali.chakraborty@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8fa"
          }
        ],
        TFs: [
          {
            name: "Anandita Bardia",
            email: "anandita.bardia_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8fb"
          }
        ]
      }
    },
    {
      name: "Macroeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Pubali Chakraborty",
            email: "pubali.chakraborty@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d8ff"
          }
        ],
        TFs: [
          {
            name: "Anandita Bardia",
            email: "anandita.bardia_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d900"
          }
        ]
      }
    },
    {
      name: "Macroeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Lalit Contractor",
            email: "lalit.contractor@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d904"
          }
        ],
        TFs: [
          {
            name: "Prerna Yadav",
            email: "prerna.yadav_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d905"
          }
        ]
      }
    },
    {
      name: "Macroeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Lalit Contractor",
            email: "lalit.contractor@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d909"
          }
        ],
        TFs: [
          {
            name: "Prerna Yadav",
            email: "prerna.yadav_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d90a"
          }
        ]
      }
    },
    {
      name: "Macroeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Nishant Chadha",
            email: "nishant.chadha@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d90e"
          }
        ],
        TFs: [
          {
            name: "Prerna Yadav",
            email: "prerna.yadav_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d90f"
          }
        ]
      }
    },
    {
      name: "Microeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Swagata Bhattacharjee",
            email: "swagata.bhattacharjee@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d913"
          }
        ],
        TFs: [
          {
            name: "Dyuti Bhattacharya",
            email: "dyuti.bhattacharya_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d914"
          },
          {
            name: "Pranjal Bhushan",
            email: "pranjal.bhushan_tf@ashoka.edu.in",
            _id: "62417c5dd0f6703b61f4d915"
          }
        ]
      }
    },
    {
      name: "Microeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Swagata Bhattacharjee",
            email: "swagata.bhattacharjee@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d919"
          }
        ],
        TFs: [
          {
            name: "Dyuti Bhattacharya",
            email: "dyuti.bhattacharya_tf@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d91a"
          },
          {
            name: "Pranjal Bhushan",
            email: "pranjal.bhushan_tf@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d91b"
          }
        ]
      }
    },
    {
      name: "Microeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Abhinash Borah",
            email: "abhinash.borah@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d91f"
          }
        ],
        TFs: [
          {
            name: "Pranjal Bhushan",
            email: "pranjal.bhushan_tf@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d920"
          }
        ]
      }
    },
    {
      name: "Microeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Abhinash Borah",
            email: "abhinash.borah@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d924"
          }
        ],
        TFs: [
          {
            name: "Pranjal Bhushan",
            email: "pranjal.bhushan_tf@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d925"
          }
        ]
      }
    },
    {
      name: "Microeconomic Theory II",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bhaskar Dutta",
            email: "bhaskar.dutta@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d929"
          }
        ],
        TFs: [
          {
            name: "Pranjal Bhushan",
            email: "pranjal.bhushan_tf@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d92a"
          }
        ]
      }
    },
    {
      name: "Labour Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Anisha Sharma",
            email: "anisha.sharma@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d92e"
          }
        ],
        TFs: [
          {
            name: "Manvi Agarwal",
            email: "manvi.agarwal_asp22@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d92f"
          }
        ]
      }
    },
    {
      name: "Qualitative Research Methods",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Rashmi Nair",
            email: "rashmi.nair@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d933"
          }
        ],
        TFs: [
          {
            name: "Ananya Chhibba",
            email: "ananya.chhibba_ug22@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d934"
          }
        ]
      }
    },
    {
      name: "History of India I (From Prehistoric Beginnings to the Mauryan Empire)",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Sanjukta Datta",
            email: "sanjukta.datta@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d938"
          }
        ],
        TFs: [
          {
            name: "Nayana Niji",
            email: "nayana.niji_ug22@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d939"
          },
          {
            name: "Siddharth Kutty",
            email: "siddharth.kutty_ug22@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d93a"
          }
        ]
      }
    },
    {
      name: "History of India III (From c. 1000 CE to 1764 CE)",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Mahmood Kooriadathodi",
            email: "mahmood.kooriadathodi@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d93e"
          }
        ],
        TFs: [
          {
            name: "Bidisha Sengupta",
            email: "bidisha.sengupta_phd21@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d93f"
          },
          {
            name: "Nishtha Sanjeev Gosewade",
            email: "nishtha.gosewade_ug22@ashoka.edu.in",
            _id: "62417c5ed0f6703b61f4d940"
          }
        ]
      }
    },
    {
      name: "History of India IV (From 1764 CE to 1967 CE)",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Rudrangshu Mukherjee",
            email: "rudrangshu.mukherjee@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d944"
          },
          {
            name: "Srinath Raghavan",
            email: "srinath.raghavan@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d945"
          }
        ],
        TFs: [
          {
            name: "Varun Vivian Mallik",
            email: "varun.mallik_tf@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d946"
          }
        ]
      }
    },
    {
      name: "Introduction to Philosophy",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Eric Paul Snyder",
            email: "eric.snyder@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d94a"
          }
        ],
        TFs: [
          {
            name: "Sarod S S",
            email: "sarod.s_ug22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d94b"
          }
        ]
      }
    },
    {
      name: "Introduction to Philosophy",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Alexander Bruce Watson",
            email: "alex.watson@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d94f"
          }
        ],
        TFs: [
          {
            name: "Dewansh Singh Matharoo",
            email: "dewansh.matharoo_ug22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d950"
          },
          {
            name: "Mukund Maithani",
            email: "mukund.maithani_asp22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d951"
          },
          {
            name: "Poorna Rathi",
            email: "poorna.rathi_ug22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d952"
          }
        ]
      }
    },
    {
      name: "Metaphysics",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Tatyana Aleksandrovna Kostochka",
            email: "tatyana.kostochka@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d956"
          }
        ],
        TFs: [
          {
            name: "Saujanya Bharadwaj",
            email: "saujanya.bharadwaj_ug22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d957"
          }
        ]
      }
    },
    {
      name: "Lab III: Optics, Oscillations &amp; Thermodynamics",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Susmita Saha",
            email: "susmita.saha@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d95b"
          }
        ],
        TFs: [
          {
            name: "Manjeet",
            email: "manjeet_tf@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d95c"
          },
          {
            name: "Mihir Nath",
            email: "mihir.nath_asp22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d95d"
          },
          {
            name: "Rohit Kumar Vishwakarma",
            email: "rohit.kumarvishwakarma_asp22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d95e"
          }
        ]
      }
    },
    {
      name: "The Political Arts",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Malvika Maheshwari",
            email: "malvika.maheshwari@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d962"
          }
        ],
        TFs: [
          {
            name: "Visalakshi Sridharan",
            email: "visalakshi.sridharan_asp22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d963"
          }
        ]
      }
    },
    {
      name: "Economics of Discrimination",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Ashwini Deshpande",
            email: "ashwini.deshpande@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d967"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Museums in South Asia: History and Politics",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Kanika Singh",
            email: "kanika.singh@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d96b"
          }
        ],
        TFs: [
          {
            name: "K Nitya Devayya",
            email: "k.devayya_ug22@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d96c"
          }
        ]
      }
    },
    {
      name: "Intermediate English Communication",
      department: "CWC",
      faculty: {
        professors: [
          {
            name: "Jyotirmoy Talukdar",
            email: "jyotirmoy.talukdar@ashoka.edu.in",
            _id: "62417c5fd0f6703b61f4d970"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Blockchain and Cryptocurrencies",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Mahabir Prasad Jhanwar",
            email: "mahavir.jhawar@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d974"
          }
        ],
        TFs: [
          {
            name: "Priyam Panda",
            email: "priyam.panda_asp22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d975"
          },
          {
            name: "Yash Raj More",
            email: "yash.more_asp22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d976"
          }
        ]
      }
    },
    {
      name: "Survival Strategies",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Alok Bhattacharya",
            email: "alok.bhattacharya@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d97a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "MA Dissertation",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Anuradha Saha",
            email: "anuradha.saha@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d97e"
          },
          {
            name: "Pubali Chakraborty",
            email: "pubali.chakraborty@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d97f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Sociology and the Making of Concepts",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Deepak Mehta",
            email: "deepak.mehta@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d983"
          }
        ],
        TFs: [
          {
            name: "Afshana Bano",
            email: "afshana.bano_mls22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d984"
          },
          {
            name: "Anirudh Raghavan",
            email: "anirudh.raghavan_tf@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d985"
          },
          {
            name: "Titiksha Shukla",
            email: "titiksha.shukla_phd21@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d986"
          },
          {
            name: "Vedika Kalra",
            email: "vedika.kalra_ug22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d987"
          }
        ]
      }
    },
    {
      name: "Gift, Commodity and the Exchange of Values",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Mekhala Krishnamurthy",
            email: "mekhala.krishnamurthy@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d98b"
          }
        ],
        TFs: [
          {
            name: "Mahi Narayanan",
            email: "mahi.narayanan_ug22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d98c"
          },
          {
            name: "Nisha Subramanian",
            email: "nisha.subramanian_phd21@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d98d"
          },
          {
            name: "Shreeja Banerjee",
            email: "shreeja.banerjee_tf@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d98e"
          },
          {
            name: "Vidur Datt",
            email: "vidur.datt_asp22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d98f"
          }
        ]
      }
    },
    {
      name: "Kin, Friends and Enemies",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Rita Brara Mukhopadhyay",
            email: "rita.mukhopadhyay@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d993"
          }
        ],
        TFs: [
          {
            name: "Aishwarya Padmaraj",
            email: "aishwarya.padmaraj_phd21@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d994"
          },
          {
            name: "Jasmine Bhalla",
            email: "jasmine.bhallah_tf@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d995"
          }
        ]
      }
    },
    {
      name: "The World of War in South Asia, 1000-1800",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Pratyay Nath",
            email: "pratyay.nath@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d999"
          }
        ],
        TFs: [
          {
            name: "Tanvi Rupakula",
            email: "tanvi.rupakula_ug22@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d99a"
          }
        ]
      }
    },
    {
      name: "Physiology",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Kasturi Pal",
            email: "kasturi.pal@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d99e"
          },
          {
            name: "Sougata Roy",
            email: "sougata.roy@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d99f"
          }
        ],
        TFs: [
          {
            name: "Ishani Sharma",
            email: "ishani.sharma_phd21@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d9a0"
          }
        ]
      }
    },
    {
      name: "Exploring Life in the Neighborhood Lab",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Imroze Khan",
            email: "imroze.khan@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d9a4"
          },
          {
            name: "Shivani",
            email: "shivani.krishna@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d9a5"
          }
        ],
        TFs: [
          {
            name: "Basabi Bagchi",
            email: "basabi.bagchi_phd17@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d9a6"
          },
          {
            name: "Devashish Kumar",
            email: "devashish.kumar_phd21@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d9a7"
          },
          {
            name: "Upasana Sengupta",
            email: "upasana.sengupta_phd20@ashoka.edu.in",
            _id: "62417c60d0f6703b61f4d9a8"
          }
        ]
      }
    },
    {
      name: "International Finance",
      department: "FIN",
      faculty: {
        professors: [
          {
            name: "Biswajit Banerjee",
            email: "biswajit.banerjee@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9ac"
          }
        ],
        TFs: [
          {
            name: "Dhrupad Damani",
            email: "dhrupad.damani_asp22@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9ad"
          },
          {
            name: "Vishrut Malhotra",
            email: "Vishrut.malhotra_phd20@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9ae"
          }
        ]
      }
    },
    {
      name: "International Finance",
      department: "FIN",
      faculty: {
        professors: [
          {
            name: "Biswajit Banerjee",
            email: "biswajit.banerjee@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9b2"
          }
        ],
        TFs: [
          {
            name: "Dhrupad Damani",
            email: "dhrupad.damani_asp22@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9b3"
          },
          {
            name: "Vishrut Malhotra",
            email: "Vishrut.malhotra_phd20@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9b4"
          }
        ]
      }
    },
    {
      name: "Sites and Sights: Museums, Exhibitions and the Making of the Art",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Sraman Mukherjee",
            email: "sraman.mukherjee@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9c3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Linear Algebra",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Maya Saran",
            email: "maya.saran@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9c6"
          }
        ],
        TFs: [
          {
            name: "Anna Mary Sajan",
            email: "anna.sajan_tf@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9c7"
          },
          {
            name: "Neelam",
            email: "neelam_tf@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9c8"
          }
        ]
      }
    },
    {
      name: "Linear Algebra",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Gaurav Bhatnagar",
            email: "gaurav.bhatnagar@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9cc"
          }
        ],
        TFs: [
          {
            name: "Anna Mary Sajan",
            email: "anna.sajan_tf@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9cd"
          },
          {
            name: "Neelam",
            email: "neelam_tf@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9ce"
          }
        ]
      }
    },
    {
      name: "Topics in the Philosophy of Mind",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Kranti Saran",
            email: "saran@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9d2"
          }
        ],
        TFs: [
          {
            name: "Deepti Jayakrishnan",
            email: "deepti.jayakrishnan_asp22@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9d3"
          }
        ]
      }
    },
    {
      name: "Ecology",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Shivani",
            email: "shivani.krishna@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9d7"
          }
        ],
        TFs: [
          {
            name: "Diana Michael",
            email: "diana.michael_phd21@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9d8"
          },
          {
            name: "Upasana Sengupta",
            email: "upasana.sengupta_phd20@ashoka.edu.in",
            _id: "62417c61d0f6703b61f4d9d9"
          }
        ]
      }
    },
    {
      name: "Responding to Difference: The Aesthetic Turn in International Relations",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Ananya Sharma",
            email: "ananya.sharma@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9dd"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Critical Thinking Seminar: Literary Journalism",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Arunava Sinha",
            email: "arunava.sinha@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9e1"
          }
        ],
        TFs: [
          {
            name: "Nandan Sankriti Kaushik",
            email: "nandan.kaushik_ug22@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9e2"
          },
          {
            name: "Upaasana Kartik",
            email: "upaasana.kartik_ug22@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9e3"
          }
        ]
      }
    },
    {
      name: "Politics and Psychoanalysis",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Malvika Maheshwari",
            email: "malvika.maheshwari@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9e7"
          }
        ],
        TFs: [
          {
            name: "Malavika Suresh",
            email: "malavika.suresh_asp22@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9e8"
          }
        ]
      }
    },
    {
      name: "Computer Programming and Applications",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Kush Khurana",
            email: "kush.khurana@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9ec"
          }
        ],
        TFs: [
          {
            name: "Richik Bandyopadhyay",
            email: "richik.bandyopadhyay_tf@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9ed"
          }
        ]
      }
    },
    {
      name: "Time Series Econometrics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Piyali Banerjee",
            email: "piyali.banerjee@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9f1"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Topics in Microeconomic Theory",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Bhaskar Dutta",
            email: "bhaskar.dutta@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9f5"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Economic Forecasting &amp; Analysis",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Piyali Banerjee",
            email: "piyali.banerjee@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9f9"
          }
        ],
        TFs: [
          {
            name: "Vaidehi Maheshwari",
            email: "vaidehi.maheshwari_asp22@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9fa"
          }
        ]
      }
    },
    {
      name: "Game Theory and Applications",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Ratul Lahkar",
            email: "ratul.lahkar@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9fe"
          }
        ],
        TFs: [
          {
            name: "Komal Trishna",
            email: "komal.trishna_asp22@ashoka.edu.in",
            _id: "62417c62d0f6703b61f4d9ff"
          }
        ]
      }
    },
    {
      name: "Mathematical Physics 3",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Somendra Mohan Bhattacharjee",
            email: "somendra.bhattacharjee@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da03"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Physics of Matter",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Garima Mishra",
            email: "garima.mishra@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da07"
          }
        ],
        TFs: [
          {
            name: "Manjeet",
            email: "manjeet_tf@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da08"
          }
        ]
      }
    },
    {
      name: "Quantum Mechanics 2",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Bikram Phookun",
            email: "bikram.phookun@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da0c"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Anthropology's Methods",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Mekhala Krishnamurthy",
            email: "mekhala.krishnamurthy@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da10"
          }
        ],
        TFs: [
          {
            name: "Afshana Bano",
            email: "afshana.bano_mls22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da11"
          },
          {
            name: "Suhesh S Janardhanan",
            email: "suhesh.janardhanan_asp22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da12"
          }
        ]
      }
    },
    {
      name: "The Craft of Writing: Fiction",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Saikat Majumdar",
            email: "saikat.majumdar@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da16"
          }
        ],
        TFs: [
          {
            name: "Diya Isha",
            email: "diya.isha_ug22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da17"
          },
          {
            name: "Prerna Vij",
            email: "prerna.vij_asp22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da18"
          }
        ]
      }
    },
    {
      name: "Thermal Physics",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Vikram Vyas",
            email: "vikram.vyas@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da1c"
          }
        ],
        TFs: [
          {
            name: "Shri Gowri R Tikoti",
            email: "shrigowri.tikoti_phd21@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da1d"
          },
          {
            name: "Shri Gowri Tikoti",
            email: "shrigowri.tikoti_ga@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da1e"
          }
        ]
      }
    },
    {
      name: "Graduate Research Methods",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da22"
          }
        ],
        TFs: [
          {
            name: "Paridhi Verma",
            email: "paridhi.verma_phd21@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da23"
          },
          {
            name: "Siddharth Thakeria",
            email: "siddharth.thakeria_mls22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da24"
          }
        ]
      }
    },
    {
      name: "International Conflict Analysis",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Bann Seng Tan",
            email: "bannseng.tan@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da28"
          }
        ],
        TFs: [
          {
            name: "Aarushi Kataria",
            email: "aarushi.kataria_ug22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da29"
          }
        ]
      }
    },
    {
      name: "Diplomacy and Statecraft in South Asia",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Rudra Chaudhuri",
            email: "rudra.chaudhuri@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da2d"
          }
        ],
        TFs: [
          {
            name: "Shauryavardhan Sharma",
            email: "shauryavardhan.sharma_asp22@ashoka.edu.in",
            _id: "62417c63d0f6703b61f4da2e"
          }
        ]
      }
    },
    {
      name: "Introductory Laboratory Course",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Munmun Ghosh",
            email: "munmun.ghosh@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da32"
          },
          {
            name: "Vidya Dnyaneshwar Avasare",
            email: "vidya.avasare@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da33"
          }
        ],
        TFs: [
          {
            name: "Guuleed Axmed Cali",
            email: "guuleed.cali_ug22@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da34"
          }
        ]
      }
    },
    {
      name: "Test Course",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Test Faculty 1",
            email: "testfaculty1@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da38"
          }
        ],
        TFs: [
          {
            name: "Test Student",
            email: "test.student_ug21@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da39"
          }
        ]
      }
    },
    {
      name: "Global Justice",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Rachel Kathleen Harbin",
            email: "kathleen.harbin@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da3d"
          }
        ],
        TFs: [
          {
            name: "Samica Vasisht",
            email: "samica.vasisht_ug22@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da3e"
          }
        ]
      }
    },
    {
      name: "Crafting identities in Central India: Arts , Crafts and Performative practices",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Preeti Bahadur Ramaswami",
            email: "preeti.ramaswami@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da42"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Fiction Workshop",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Janice Erica Pariat",
            email: "janice.pariat@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da46"
          }
        ],
        TFs: [
          {
            name: "Srishti Ojha Lohani",
            email: "srishti.ojhalohani_ug22@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da47"
          }
        ]
      }
    },
    {
      name: "Introduction to Drama and Theatre",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Vivek Venkitaraman Narayan",
            email: "v.v.narayan@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da4b"
          }
        ],
        TFs: [
          {
            name: "Hanish Srinivasan",
            email: "hanish.srinivasan_mls22@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da4c"
          }
        ]
      }
    },
    {
      name: "Introduction to Children’s Literature",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Geetanjali Chanda",
            email: "geetanjali.chanda@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da50"
          }
        ],
        TFs: [
          {
            name: "Shreeja Singh",
            email: "shreeja.singh_ug22@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da51"
          },
          {
            name: "Shubham Hitesh Daiya",
            email: "shubham.daiya_ma23@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da52"
          }
        ]
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Krittika Bhattacharjee",
            email: "krittika.bhattacharjee@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da56"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Krittika Bhattacharjee",
            email: "krittika.bhattacharjee@ashoka.edu.in",
            _id: "62417c64d0f6703b61f4da5a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Devapriya Roy",
            email: "devapriya.roy@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da65"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Devapriya Roy",
            email: "devapriya.roy@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da68"
          }
        ],
        TFs: [
          {
            name: "Aaryan Pavvit Pavvit Chhabra",
            email: "aaryanpavvit.chhabra_ug22@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da69"
          }
        ]
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Rashmi Muraleedhar",
            email: "rashmi.muraleedhar@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da6d"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Rashmi Muraleedhar",
            email: "rashmi.muraleedhar@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da71"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Kundan Sen",
            email: "kundan.sen@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da75"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Kundan Sen",
            email: "kundan.sen@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da79"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Arpita Das",
            email: "arpita.das@ashoka.edu.in",
            _id: "62417c65d0f6703b61f4da7d"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Arpita Das",
            email: "arpita.das@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da81"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Jasleen Kaur Bagga",
            email: "jasleen.bagga@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da85"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Jasleen Kaur Bagga",
            email: "jasleen.bagga@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da89"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Sidharth Singh",
            email: "sidharth.singh@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da8d"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Sidharth Singh",
            email: "sidharth.singh@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da91"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Amaan Shreyas",
            email: "amaan.shreyas@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da95"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Critical Thinking",
      department: "CT",
      faculty: {
        professors: [
          {
            name: "Amaan Shreyas",
            email: "amaan.shreyas@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da99"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Material Theatre and Camera as Languages of Performance",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da9d"
          },
          {
            name: "Anurupa Roy",
            email: "anurupa.roy@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4da9e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "The Photo Story: Photography and Story-Telling",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4daa2"
          },
          {
            name: "Anshika Verma",
            email: "anshika.varma@ashoka.edu.in",
            _id: "62417c66d0f6703b61f4daa3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "The Ashoka Conversation",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "Maya Mirchandani",
            email: "maya.mirchandani@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daa7"
          }
        ],
        TFs: [
          {
            name: "Akanksha Mishra",
            email: "akanksha.mishra_ug22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daa8"
          }
        ]
      }
    },
    {
      name: "Economics of Family",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Pubali Chakraborty",
            email: "pubali.chakraborty@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daac"
          }
        ],
        TFs: [
          {
            name: "Mallika Chandra",
            email: "mallika.chandra_asp22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daad"
          },
          {
            name: "Sanah Bhabha",
            email: "sanah.bhabha_asp22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daae"
          }
        ]
      }
    },
    {
      name: "Agrarian Worlds: Land, Culture and Power",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Mitul Baruah",
            email: "mitul.baruah@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dab2"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Psychotherapy: Theoretical Foundations and Research",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Shudarshana Gupta",
            email: "shudarshana.gupta@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dab6"
          }
        ],
        TFs: [
          {
            name: "Kashish Janiani",
            email: "kashish.janiani_asp22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dab7"
          },
          {
            name: "Shreya Singh",
            email: "shreya.singh_asp22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dab8"
          },
          {
            name: "Siddharth Singhania",
            email: "siddharth.singhania_asp22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dab9"
          },
          {
            name: "Tanya Parvez Battiwalla",
            email: "tanya.battiwalla_asp22@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daba"
          }
        ]
      }
    },
    {
      name: "Principles of Science",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Alok Bhattacharya",
            email: "alok.bhattacharya@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dabe"
          },
          {
            name: "L S Shashidhara",
            email: "ls.shashidhara@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dabf"
          },
          {
            name: "Rama Sundari Akondy",
            email: "rama.akondy@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac0"
          }
        ],
        TFs: [
          {
            name: "Devshuvam Banerji",
            email: "devshuvam.banerji_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac1"
          },
          {
            name: "Pratibha Songara",
            email: "pratibha.songara_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac2"
          }
        ]
      }
    },
    {
      name: "Principles of Science",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "L S Shashidhara",
            email: "ls.shashidhara@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac6"
          },
          {
            name: "Shraddha Karve",
            email: "shraddha.karve@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac7"
          },
          {
            name: "Somak Raychaudhury",
            email: "somak.raychaudhury@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac8"
          }
        ],
        TFs: [
          {
            name: "Dinesh Jadhav",
            email: "dinesh.jadhav_phd19@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dac9"
          },
          {
            name: "Yash Bhargava",
            email: "yash.bhargava_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4daca"
          }
        ]
      }
    },
    {
      name: "Literature and the World",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Abir Bashir Bazaz",
            email: "abir.bazaz@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dace"
          }
        ],
        TFs: [
          {
            name: "Ailin Reeba Jain",
            email: "ailin.jain_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dacf"
          },
          {
            name: "Tamanna Basu",
            email: "tamanna.basu_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dad0"
          }
        ]
      }
    },
    {
      name: "Literature and the World",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Rita Kothari",
            email: "rita.kothari@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dad4"
          }
        ],
        TFs: [
          {
            name: "Rashi Maheshwari",
            email: "rashi.maheshwari_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dad5"
          },
          {
            name: "Srija U",
            email: "srija.u_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dad6"
          }
        ]
      }
    },
    {
      name: "Great Books",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Rudrangshu Mukherjee",
            email: "rudrangshu.mukherjee@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dada"
          }
        ],
        TFs: [
          {
            name: "Megha Sharma",
            email: "megha.sharma_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dadb"
          },
          {
            name: "Sukhalata Sen",
            email: "sukhalata.sen_tf@ashoka.edu.in",
            _id: "62417c67d0f6703b61f4dadc"
          }
        ]
      }
    },
    {
      name: "Great Books",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Neeladri Bhattacharya",
            email: "neeladri.bhattacharya@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dae0"
          }
        ],
        TFs: [
          {
            name: "Romyarup Mitra",
            email: "romyarup.mitra_tf@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dae1"
          },
          {
            name: "Shrinidhi Narasimhan",
            email: "shrinidhi.narasimhan_tf@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dae2"
          }
        ]
      }
    },
    {
      name: "Great Books",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Malabika Sarkar",
            email: "malabika.sarkar@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dae6"
          }
        ],
        TFs: [
          {
            name: "Kartika Puri",
            email: "kartika.puri_tf@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dae7"
          },
          {
            name: "Pourvaja Ganesh",
            email: "pourvaja.ganesh_tf@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dae8"
          }
        ]
      }
    },
    {
      name: "Qualitative Approaches to Political Violence",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Gilles Verniers",
            email: "gilles.verniers@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daec"
          }
        ],
        TFs: [
          {
            name: "Afshana Bano",
            email: "afshana.bano_mls22@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daed"
          },
          {
            name: "Jahnavi Mukul",
            email: "jahnavi.mukul_asp22@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daee"
          },
          {
            name: "Priavi Joshi",
            email: "priavi.joshi_asp22@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daef"
          }
        ]
      }
    },
    {
      name: "Performing Arts Practices",
      department: "PA",
      faculty: {
        professors: [
          {
            name: "Thomas Michael Mccarthy",
            email: "justin.mccarthy@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daf3"
          }
        ],
        TFs: [
          {
            name: "Amit Kumar",
            email: "amit.kumar_mls22@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daf4"
          }
        ]
      }
    },
    {
      name: "Introduction to Rhetoric: Rhetoric of Social Protest",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Subhasree Chakravarty",
            email: "subhasree.chakravarty@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daf8"
          }
        ],
        TFs: [
          {
            name: "Aditya Banerjee",
            email: "aditya.banerjee_asp22@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4daf9"
          }
        ]
      }
    },
    {
      name: "Rate, Order and Mechanism",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Aryya Ghosh",
            email: "aryya.ghosh@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dafd"
          }
        ],
        TFs: [
          {
            name: "Bharath M",
            email: "bharath.m_phd21@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4dafe"
          }
        ]
      }
    },
    {
      name: "Inorganic Chemistry",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Munmun Ghosh",
            email: "munmun.ghosh@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4db02"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Energetics of Change",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Aryya Ghosh",
            email: "aryya.ghosh@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4db06"
          }
        ],
        TFs: [
          {
            name: "Vipin Kumar",
            email: "vipin.kumar_phd21@ashoka.edu.in",
            _id: "62417c68d0f6703b61f4db07"
          }
        ]
      }
    },
    {
      name: "Critical Thinking Seminar: Writing the Self",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Geetanjali Chanda",
            email: "geetanjali.chanda@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db0b"
          }
        ],
        TFs: [
          {
            name: "Shubham Gupta",
            email: "shubham.gupta_phd21@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db0c"
          }
        ]
      }
    },
    {
      name: "Thesis Workshop II",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Durba Chattaraj",
            email: "durba.chattaraj@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db10"
          }
        ],
        TFs: [
          {
            name: "Shubha Mukherji",
            email: "shubha.mukherji_ug22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db11"
          },
          {
            name: "Tanvi Krishnakumar",
            email: "tanvi.krishnakumar_ug22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db12"
          }
        ]
      }
    },
    {
      name: "Economics of Technology",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Nishant Chadha",
            email: "nishant.chadha@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db16"
          }
        ],
        TFs: [
          {
            name: "Prisha Kapur",
            email: "prisha.kapur_asp22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db17"
          }
        ]
      }
    },
    {
      name: "Arts of our Times II - Media as Material of Practice",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Rakhi Peswani",
            email: "rakhi.peswani@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db1b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Critical and Creative Writing Workshop",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Amit Prakash Chaudhuri",
            email: "amit.chaudhuri@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db1f"
          }
        ],
        TFs: [
          {
            name: "Tanvi Chowdhary",
            email: "tanvi.chowdhary_phd21@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db20"
          }
        ]
      }
    },
    {
      name: "Seminar in Publishing",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Arunava Sinha",
            email: "arunava.sinha@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db24"
          }
        ],
        TFs: [
          {
            name: "Kshitija Chavan",
            email: "kshitija.chavan_asp22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db25"
          },
          {
            name: "Madhulika Agarwal",
            email: "madhulika.agarwal_asp22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db26"
          }
        ]
      }
    },
    {
      name: "Cognitive Neuroscience : A Clinical Perspective",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Manon Grube",
            email: "manon.grube@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db2a"
          }
        ],
        TFs: [
          {
            name: "Anubhab Bhattacharjee",
            email: "anubhab.bhattacharjee_ug22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db2b"
          },
          {
            name: "Bodhisatwa Chaudhuri",
            email: "bodhisatwa.chaudhuri_tf@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db2c"
          },
          {
            name: "Nawaf Majeed",
            email: "nawaf.majeed_phd21@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db2d"
          }
        ]
      }
    },
    {
      name: "Music and Cognition",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Swathi Swaminathan",
            email: "swathi.swaminathan@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db31"
          }
        ],
        TFs: [
          {
            name: "Bhavya Dixit",
            email: "bhavya.dixit_asp22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db32"
          },
          {
            name: "Ishita Sundeep Ahuja",
            email: "ishita.ahuja_asp22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db33"
          },
          {
            name: "Vasudha Bedi",
            email: "vasudha.bedi_asp22@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db34"
          },
          {
            name: "Vivek Dasoju",
            email: "vivek.dasoju_phd21@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db35"
          }
        ]
      }
    },
    {
      name: "Drawing as Extended Play",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Anni Kumari",
            email: "anni.kumari@ashoka.edu.in",
            _id: "62417c69d0f6703b61f4db39"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Metric and Topological Spaces",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Conjeeveram Srirangachari Ranjan",
            email: "conjeeveram.rajan@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db3d"
          }
        ],
        TFs: [
          {
            name: "Ojas Dhiman",
            email: "ojas.dhiman_tf@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db3e"
          }
        ]
      }
    },
    {
      name: "Remote Sensing",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Meghna Agarwala",
            email: "meghna.agarwala@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db42"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Topics in Chemistry",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Sourav Pal",
            email: "sourav.pal@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db46"
          },
          {
            name: "Vidya Dnyaneshwar Avasare",
            email: "vidya.avasare@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db47"
          }
        ],
        TFs: [
          {
            name: "Kavita Pal",
            email: "kavita.pal_ug22@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db48"
          }
        ]
      }
    },
    {
      name: "General Chemistry Laboratory",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Basudeb Maji",
            email: "basudeb.maji@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db4c"
          }
        ],
        TFs: [
          {
            name: "Sadiya Tanga",
            email: "sadiya.tanga_phd21@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db4d"
          }
        ]
      }
    },
    {
      name: "Chemical Biology",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Vidya Dnyaneshwar Avasare",
            email: "vidya.avasare@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db51"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Art of Editing",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "A K Ranjit",
            email: "ak.ranjit@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db55"
          }
        ],
        TFs: [
          {
            name: "Aaryan Sanwal",
            email: "aaryan.sanwal_asp22@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db56"
          }
        ]
      }
    },
    {
      name: "Media, Culture &amp; Society",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "Neha Dixit",
            email: "neha.dixit@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db5a"
          }
        ],
        TFs: [
          {
            name: "Pranesh Hp",
            email: "pranesh.hp_ug22@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db5b"
          },
          {
            name: "Pranshu Rathee",
            email: "pranshu.rathee_ga@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db5c"
          },
          {
            name: "Pranshu Rathee",
            email: "pranshu.rathee_mls22@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db5d"
          }
        ]
      }
    },
    {
      name: "Behavioral Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Srijita Ghosh",
            email: "srijita.ghosh@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db61"
          }
        ],
        TFs: [
          {
            name: "Ipsita Chatterjee",
            email: "ipsita.chatterjee_asp22@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db62"
          },
          {
            name: "Udhav Sinha",
            email: "udhav.sinha_asp22@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db63"
          }
        ]
      }
    },
    {
      name: "Time in Biology",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Sougata Roy",
            email: "sougata.roy@ashoka.edu.in",
            _id: "62417c6ad0f6703b61f4db67"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Ecological and Epidemiological dynamics",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Balaji Chattopadhyay",
            email: "balaji.chattopadhyay@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db6b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Biology Research II",
      department: "BIO",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Content Analysis and Communication Research Methods",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "Purnima Mehrotra",
            email: "purnima.mehrotra@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db72"
          }
        ],
        TFs: [
          {
            name: "Akul Puri",
            email: "akul.puri_ma22@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db73"
          },
          {
            name: "Riddhi Rai",
            email: "riddhi.rai_asp22@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db74"
          }
        ]
      }
    },
    {
      name: "Literature and the Age of Empire",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Sharif M Youssef",
            email: "sharif.youssef@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db78"
          }
        ],
        TFs: [
          {
            name: "Ishana Singh",
            email: "ishana.singh_ma22@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db79"
          }
        ]
      }
    },
    {
      name: "Literature and the Age of Empire",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Sharif M Youssef",
            email: "sharif.youssef@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db7d"
          }
        ],
        TFs: [
          {
            name: "Madhubrata Bhattacharyya",
            email: "madhubrata.bhattacharyya_phd21@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db7e"
          }
        ]
      }
    },
    {
      name: "Psychology and Law",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Sramana Majumdar",
            email: "sramana.majumdar@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db82"
          }
        ],
        TFs: [
          {
            name: "Maanya Tewatia",
            email: "maanya.tewatia_tf@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db83"
          },
          {
            name: "Saransh Ahuja",
            email: "saransh.ahuja_asp22@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db84"
          }
        ]
      }
    },
    {
      name: "Capstone Thesis",
      department: "ECO",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Capstone Thesis",
      department: "PSY",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Venture Immersion Project",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db8e"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c6bd0f6703b61f4db8f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Sources and Histories II",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Aparna Vaidik",
            email: "aparna.vaidik@ashoka.edu.in",
            _id: "62417c6cd0f6703b61f4db93"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Interdisciplinary Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ENT: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "PSY: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "POL: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ENG: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "PHI: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "SOA: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ECO: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Intermediate Sanskrit 1 (Pañcatantra)",
      department: "SAN",
      faculty: {
        professors: [
          {
            name: "Naresh Keerthi",
            email: "naresh.keerthi@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbaf"
          }
        ],
        TFs: []
      }
    },
    {
      name: "The International Relations of Latin America",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Quintijn Benjamin Kat",
            email: "quintijn.kat@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbb3"
          }
        ],
        TFs: [
          {
            name: "Aryan Srivastava",
            email: "aryan.srivastava_ug22@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbb4"
          }
        ]
      }
    },
    {
      name: "Critical Thinking Seminar: Caste Creativity",
      department: "ENG",
      faculty: {
        professors: [],
        TFs: [
          {
            name: "Antony Arul Valan",
            email: "antony.valan_ga@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbb8"
          },
          {
            name: "Dimple Kariya",
            email: "dimple.kariya_ga@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbb9"
          },
          {
            name: "Dimple Kariya",
            email: "dimple.kariya_mls22@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbba"
          },
          {
            name: "G Antony Arul Valan",
            email: "antony.valan_phd18@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbbb"
          }
        ]
      }
    },
    {
      name: "The Rise of China and the Shifting Balance of Power in Asia",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Nayan Ranjan Chanda",
            email: "nayan.chanda@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbbf"
          }
        ],
        TFs: [
          {
            name: "Sital Kumar",
            email: "sital.kumar_asp22@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbc0"
          }
        ]
      }
    },
    {
      name: "Elementary Sanskrit - II",
      department: "SAN",
      faculty: {
        professors: [
          {
            name: "Shagun Sinha",
            email: "shagun.sinha@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbc4"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Elementary Sanskrit - I",
      department: "SAN",
      faculty: {
        professors: [
          {
            name: "Shagun Sinha",
            email: "shagun.sinha@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbc8"
          }
        ],
        TFs: [
          {
            name: "Soumya Sharma",
            email: "soumya.sharma_ug22@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbc9"
          }
        ]
      }
    },
    {
      name: "Economy, Politics and Society",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Aparajita Dasgupta",
            email: "aparajita.dasgupta@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbcd"
          }
        ],
        TFs: [
          {
            name: "Reem Qamar",
            email: "reem.qamar_tf@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbce"
          }
        ]
      }
    },
    {
      name: "Economy, Politics and Society",
      department: "FC",
      faculty: {
        professors: [
          {
            name: "Srinath Raghavan",
            email: "srinath.raghavan@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbd2"
          }
        ],
        TFs: [
          {
            name: "Abhiraj Singh",
            email: "abhiraj.singh_tf@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbd3"
          },
          {
            name: "Bharat Sharma",
            email: "bharat.sharma_tf@ashoka.edu.in",
            _id: "62417c6dd0f6703b61f4dbd4"
          }
        ]
      }
    },
    {
      name: "Calculus",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Krishna Maddaly",
            email: "krishna.maddaly@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbd8"
          }
        ],
        TFs: [
          {
            name: "Chandra Shekhar Mishra",
            email: "chandrashekhar.mishra_ug22@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbd9"
          },
          {
            name: "Maruf Alam Tarafdar",
            email: "maruf.tarafdar_tf@ashoka.edu",
            _id: "62417c6ed0f6703b61f4dbda"
          },
          {
            name: "Priya Dahiya",
            email: "priya.dahiya_tf@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbdb"
          },
          {
            name: "Samir Kumar Hazra",
            email: "samir.hazra_tf@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbdc"
          }
        ]
      }
    },
    {
      name: "Calculus",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Guhan Venkat",
            email: "guhan.venkat@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbe0"
          }
        ],
        TFs: [
          {
            name: "Maruf Alam Tarafdar",
            email: "maruf.tarafdar_tf@ashoka.edu",
            _id: "62417c6ed0f6703b61f4dbe1"
          },
          {
            name: "Priya Dahiya",
            email: "priya.dahiya_tf@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbe2"
          },
          {
            name: "Samir Kumar Hazra",
            email: "samir.hazra_tf@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbe3"
          }
        ]
      }
    },
    {
      name: "VA: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [
          {
            name: "Preeti Bahadur Ramaswami",
            email: "preeti.ramaswami@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbe7"
          },
          {
            name: "Sraman Mukherjee",
            email: "sraman.mukherjee@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbe8"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Macroeconomic Policy",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Rahul Nath",
            email: "rahul.nath@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbec"
          }
        ],
        TFs: [
          {
            name: "Umashankar -",
            email: "umashankar_asp22@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbed"
          }
        ]
      }
    },
    {
      name: "Machine Learning for Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Sugat Chaturvedi",
            email: "sugat.chaturvedi@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbf1"
          }
        ],
        TFs: [
          {
            name: "Jitendra Singh",
            email: "jitendra.singh_phd18@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbf2"
          }
        ]
      }
    },
    {
      name: "Migrants, Local Women and the Shaping of Language in the Indian Subcontinent",
      department: "CLA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbf6"
          },
          {
            name: "Mary Margaret Christina Mohan",
            email: "peggy.mohan@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbf7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Rhymes, Rhythms and Revolutions: A journey through the landscape of Malayalam Poetry",
      department: "CLA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbfb"
          },
          {
            name: "Amrith Lal B",
            email: "amrith.lal@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dbfc"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Love Poetry in Sanskrit",
      department: "CLA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dc00"
          },
          {
            name: "Achintya Prahlad",
            email: "achintya.prahlad@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dc01"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Western Classical Music: Masterpieces of Western Music",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dc05"
          },
          {
            name: "Madhavan Somanathan",
            email: "madhavan.somanathan@ashoka.edu.in",
            _id: "62417c6ed0f6703b61f4dc06"
          }
        ],
        TFs: []
      }
    },
    {
      name: "South Indian Folk Dances",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc0a"
          },
          {
            name: "Veena Kumar",
            email: "veena.kumar@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc0b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Development Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Aparajita Dasgupta",
            email: "aparajita.dasgupta@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc0f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Madrigals and more: Exploring song forms from the Renaissance",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc13"
          },
          {
            name: "Punita Gurpreet Singh",
            email: "punita.singh@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc14"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Carnatic Music: Praxis and History",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc18"
          },
          {
            name: "Sudha Raghuraman",
            email: "sudha.raghuraman@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc19"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Performing the New World: Rituals for an Actor's Imagination",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc1d"
          },
          {
            name: "Kriti Maria Pant",
            email: "kriti.pant@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc1e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Finding your feet in Odissi",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc22"
          },
          {
            name: "Manishikha Baul",
            email: "manishikha.baul@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc23"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Abstraction and Meaning-making  of Movement",
      department: "CPA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc27"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Three Dimensional Art",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc2b"
          },
          {
            name: "Rajesh Ram",
            email: "rajesh.ram@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc2c"
          }
        ],
        TFs: []
      }
    },
    {
      name: "The Human Figure in Monotype Printmaking",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc30"
          },
          {
            name: "Anni Kumari",
            email: "anni.kumari@ashoka.edu.in",
            _id: "62417c6fd0f6703b61f4dc31"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Visual Journaling with the Mobile Phone Camera",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc35"
          },
          {
            name: "Dinesh Khanna",
            email: "dinesh.khanna@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc36"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Reality and You: The study and practice of Documentary filmmaking",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc3a"
          },
          {
            name: "Amit Mahanti",
            email: "amit.mahanti@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc3b"
          },
          {
            name: "Ruchika Negi",
            email: "ruchika.negi@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc3c"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Building Narratives through the Scroll and the Folding Book",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc40"
          },
          {
            name: "Ruchika Wason Singh",
            email: "ruchika.singh@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc41"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Experiments with Charcoal and Pastel",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc45"
          },
          {
            name: "Yasmeen Tayebbhai",
            email: "yasmeen.tayebbhai@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc46"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Nonfiction filmmaking",
      department: "CVA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc4a"
          },
          {
            name: "Nakul Singh Sawhney",
            email: "nakul.sawhney@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc4b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Theories and Issues of International Relations",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Quintijn Benjamin Kat",
            email: "quintijn.kat@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc4f"
          }
        ],
        TFs: [
          {
            name: "Aanchal Manuja",
            email: "aanchal.manuja_tf@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc50"
          }
        ]
      }
    },
    {
      name: "Conservation Policy in the Developing World",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Ghazala Shahabuddin",
            email: "ghazala.shahabuddin@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc54"
          }
        ],
        TFs: [
          {
            name: "Ananya Pradyumna Vyas",
            email: "ananya.vyas_asp22@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc55"
          }
        ]
      }
    },
    {
      name: "French: the Language and History through Comic Books",
      department: "CLA",
      faculty: {
        professors: [
          {
            name: "Abhinaya Penneswaran",
            email: "abhinaya.penneswaran@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc59"
          },
          {
            name: "Dorothee Gieux",
            email: "dorothee.gieux@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc5a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Landscape Ecology",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Divya Vasudev",
            email: "divya.vasudev@ashoka.edu.in",
            _id: "62417c70d0f6703b61f4dc5e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Nationalism and identity construction: theories, concepts, case studies",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Julien Levesque",
            email: "julien.levesque@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc62"
          }
        ],
        TFs: [
          {
            name: "Aishwarya Choudhary",
            email: "aishwarya.choudhary_asp22@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc63"
          }
        ]
      }
    },
    {
      name: "Social Movements",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Julien Levesque",
            email: "julien.levesque@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc67"
          }
        ],
        TFs: [
          {
            name: "Deepish Mani",
            email: "deepish.mani_mls22@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc68"
          }
        ]
      }
    },
    {
      name: "Pakistan: A Social and Political History",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Julien Levesque",
            email: "julien.levesque@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc6c"
          }
        ],
        TFs: [
          {
            name: "Aryaman Agarwal",
            email: "aryaman.agarwal_ug22@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc6d"
          }
        ]
      }
    },
    {
      name: "Elliptic Curves and Cryptography",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Guhan Venkat",
            email: "guhan.venkat@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc71"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Representation theory",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Conjeeveram Srirangachari Ranjan",
            email: "conjeeveram.rajan@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc75"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Calculus on Normed Spaces",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Rajendra Bhatia",
            email: "rajendra.bhatia@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc79"
          }
        ],
        TFs: [
          {
            name: "Pratik Prashant Apshinge",
            email: "pratik.apshinge_asp22@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc7a"
          }
        ]
      }
    },
    {
      name: "Nation and State-Making in India's Borders",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Kaustav Chakrabarti",
            email: "kaustav.chakrabarti@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc7e"
          }
        ],
        TFs: [
          {
            name: "Aninthitha Nath",
            email: "aninthitha.nath_asp22@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc7f"
          },
          {
            name: "Sadam Hussain",
            email: "sadam.hussain_tf@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc80"
          }
        ]
      }
    },
    {
      name: "Democratization and Foreign Aid",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Bann Seng Tan",
            email: "bannseng.tan@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc84"
          }
        ],
        TFs: [
          {
            name: "Niharika Mehrotra",
            email: "niharika.mehrotra_ug22@ashoka.edu.in",
            _id: "62417c71d0f6703b61f4dc85"
          }
        ]
      }
    },
    {
      name: "The Politics of Uttar Pradesh",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Gilles Verniers",
            email: "gilles.verniers@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc89"
          }
        ],
        TFs: [
          {
            name: "Anandi Pandey",
            email: "anandi.pandey_asp22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc8a"
          },
          {
            name: "Kesar Majethia",
            email: "kesar.majethia_asp22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc8b"
          },
          {
            name: "Pranshu Rathee",
            email: "pranshu.rathee_ga@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc8c"
          },
          {
            name: "Pranshu Rathee",
            email: "pranshu.rathee_mls22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc8d"
          }
        ]
      }
    },
    {
      name: "Machine Learning for Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Sugat Chaturvedi",
            email: "sugat.chaturvedi@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc91"
          }
        ],
        TFs: []
      }
    },
    {
      name: "The Listening Body: Fundamentals of Contemporary Theatre Practices",
      department: "PA",
      faculty: {
        professors: [
          {
            name: "Anirudh Nair",
            email: "anirudh.nair@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc95"
          },
          {
            name: "Neel Choudhary",
            email: "neel.chaudhuri@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc96"
          }
        ],
        TFs: [
          {
            name: "Ankita Chettri",
            email: "ankita.chettri_mls22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc97"
          }
        ]
      }
    },
    {
      name: "The Sensory Body: Desire, Permission, Transgression",
      department: "PA",
      faculty: {
        professors: [
          {
            name: "Navtej Johar",
            email: "navtej.johar@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc9b"
          }
        ],
        TFs: [
          {
            name: "Zinnia Girdhar",
            email: "zinnia.girdhar_asp22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dc9c"
          }
        ]
      }
    },
    {
      name: "Intermediate Sanskrit 2",
      department: "SAN",
      faculty: {
        professors: [
          {
            name: "Naresh Keerthi",
            email: "naresh.keerthi@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dca0"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Anthropology of Women and Work",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Smita Tewari Jassal",
            email: "smita.jassal@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dca4"
          }
        ],
        TFs: [
          {
            name: "Radhika Joshi",
            email: "radhika.joshi_mls22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dca5"
          }
        ]
      }
    },
    {
      name: "The Anthropology of Humour",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Durba Chattaraj",
            email: "durba.chattaraj@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dca9"
          }
        ],
        TFs: [
          {
            name: "Lavanya Sen",
            email: "lavanya.sen_asp22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dcaa"
          }
        ]
      }
    },
    {
      name: "Caste and Gender",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Smita Tewari Jassal",
            email: "smita.jassal@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dcae"
          }
        ],
        TFs: [
          {
            name: "Tenzing Palmo",
            email: "tenzing.palmo_mls22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dcaf"
          }
        ]
      }
    },
    {
      name: "Torture and Anthropology",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Deepak Mehta",
            email: "deepak.mehta@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dcb3"
          }
        ],
        TFs: [
          {
            name: "Anagha Vishnu",
            email: "anagha.vishnu_asp22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dcb4"
          },
          {
            name: "Nivedita Gautam",
            email: "nivedita.gautam_asp22@ashoka.edu.in",
            _id: "62417c72d0f6703b61f4dcb5"
          }
        ]
      }
    },
    {
      name: "Theorising the Contemporary: Words and Worldings",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Rita Brara Mukhopadhyay",
            email: "rita.mukhopadhyay@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcb9"
          }
        ],
        TFs: [
          {
            name: "Supriya Suresh",
            email: "supriya.suresh_asp22@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcba"
          }
        ]
      }
    },
    {
      name: "Economy, Ecology and Infrastructure: An Ethnographic Approach",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Amita Baviskar",
            email: "amita.baviskar@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcbe"
          }
        ],
        TFs: [
          {
            name: "Geetanjali Sharma",
            email: "geetanjali.sharma_asp22@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcbf"
          }
        ]
      }
    },
    {
      name: "Research Methodology",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Swargajyoti Gohain",
            email: "swargajyoti.gohain@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcc3"
          }
        ],
        TFs: [
          {
            name: "Palaash Sabhlok",
            email: "palaash.sabhlok_mls22@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcc4"
          }
        ]
      }
    },
    {
      name: "Phase Transitions and Critical Phenomena",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Somendra Mohan Bhattacharjee",
            email: "somendra.bhattacharjee@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcc8"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Quantum Field Theory 1: Introduction and Foundations",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Amin Ahmad Nizami",
            email: "amin.nizami@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dccc"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Modern Cosmology",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Suratna Das",
            email: "suratna.das@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcd0"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Advanced Lab 5: Experimental Soft matter Physics/Complex Systems",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Pramoda Kumar",
            email: "pramoda.kumar@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcd4"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Computational Modelling of Behaviour",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Apoorva Bhandari",
            email: "apoorva.bhandari@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcd8"
          }
        ],
        TFs: [
          {
            name: "Ritu Panda",
            email: "ritu.panda_phd21@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcd9"
          }
        ]
      }
    },
    {
      name: "Dream Visions",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Aparna Chaudhuri",
            email: "aparna.chaudhuri@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcdd"
          }
        ],
        TFs: [
          {
            name: "Sowmya Vaidyanathan",
            email: "sowmya.vaidyanathan_asp22@ashoka.edu.in",
            _id: "62417c73d0f6703b61f4dcde"
          }
        ]
      }
    },
    {
      name: "Shakesqueer",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Madhavi Menon",
            email: "menon@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dce2"
          }
        ],
        TFs: [
          {
            name: "Surabhi Jain",
            email: "surabhi.jain_asp22@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dce3"
          }
        ]
      }
    },
    {
      name: "Comics for Social Media",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Arijit Sengupta",
            email: "arijit.sengupta@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dce7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Fuzzy Cartographies",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Johannes Hendrikus Burgers",
            email: "johannes.burgers@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dceb"
          }
        ],
        TFs: [
          {
            name: "Sonal Rana",
            email: "sonal.rana_ma23@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcec"
          }
        ]
      }
    },
    {
      name: "Writing About Watching a Film: Being a film critic",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "Tisha Srivastav",
            email: "tisha.srivastav@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcf0"
          }
        ],
        TFs: [
          {
            name: "Devanshi Rajendra Daga",
            email: "devanshi.daga_asp22@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcf1"
          }
        ]
      }
    },
    {
      name: "Film Theory",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Abir Bashir Bazaz",
            email: "abir.bazaz@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcf5"
          }
        ],
        TFs: [
          {
            name: "Shivangi Jalan",
            email: "shivangi.jalan_phd21@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcf6"
          }
        ]
      }
    },
    {
      name: "Introduction to Still Photography",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "A K Ranjit",
            email: "ak.ranjit@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcfa"
          },
          {
            name: "Maya Mirchandani",
            email: "maya.mirchandani@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcfb"
          }
        ],
        TFs: [
          {
            name: "Aashna Sethi",
            email: "aashna.sethi_ug22@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dcfc"
          }
        ]
      }
    },
    {
      name: "Scripting Caste",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Rita Kothari",
            email: "rita.kothari@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd00"
          }
        ],
        TFs: [
          {
            name: "Mukta Ketan Pradhan",
            email: "mukta.pradhan_asp22@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd01"
          }
        ]
      }
    },
    {
      name: "Medieval Travellers",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Alexandra Cassatt Verini",
            email: "alexandra.verini@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd05"
          }
        ],
        TFs: [
          {
            name: "Iqra Raza",
            email: "iqra.raza_phd21@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd06"
          }
        ]
      }
    },
    {
      name: "MA Proseminar II: Thesis Writing",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Aparna Chaudhuri",
            email: "aparna.chaudhuri@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd0a"
          }
        ],
        TFs: [
          {
            name: "Abhilasha Sawlani",
            email: "abhilasha.sawlani_ga@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd0b"
          },
          {
            name: "Abhilasha Sawlani",
            email: "abhilasha.sawlani_phd19@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd0c"
          },
          {
            name: "Malay Bera",
            email: "malay.bera_ga@ashoka.edu.in",
            _id: "62417c74d0f6703b61f4dd0d"
          }
        ]
      }
    },
    {
      name: "World English",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Saikat Majumdar",
            email: "saikat.majumdar@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd11"
          }
        ],
        TFs: [
          {
            name: "Ayla Dhawan",
            email: "ayla.dhawan_ug22@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd12"
          }
        ]
      }
    },
    {
      name: "Is There A Modern Indian Literature?",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Amit Prakash Chaudhuri",
            email: "amit.chaudhuri@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd16"
          }
        ],
        TFs: [
          {
            name: "Sanchit Toor",
            email: "sanchit.toor_ma22@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd17"
          }
        ]
      }
    },
    {
      name: "Transnational Transgender",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Madhavi Menon",
            email: "menon@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd1b"
          }
        ],
        TFs: [
          {
            name: "Anoushka Shyam",
            email: "anoushka.shyam_asp22@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd1c"
          }
        ]
      }
    },
    {
      name: "Performance/Politics",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Vivek Venkitaraman Narayan",
            email: "v.v.narayan@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd20"
          }
        ],
        TFs: [
          {
            name: "Krishna P Unny",
            email: "krishna.punny_mls22@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd21"
          }
        ]
      }
    },
    {
      name: "Graduate Research Writing and Methods",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Subhasree Chakravarty",
            email: "subhasree.chakravarty@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd25"
          }
        ],
        TFs: [
          {
            name: "Ved Dutt Arya",
            email: "ved.arya_phd20@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd26"
          }
        ]
      }
    },
    {
      name: "Ancient Philosophy",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Rachel Kathleen Harbin",
            email: "kathleen.harbin@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd2a"
          }
        ],
        TFs: [
          {
            name: "Malavika Suresh",
            email: "malavika.suresh_asp22@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd2b"
          }
        ]
      }
    },
    {
      name: "Philosophy and Literature",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Sharon Berry",
            email: "sharon.berry@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd2f"
          }
        ],
        TFs: [
          {
            name: "Nayancee Shrivastava",
            email: "nayancee.shrivastava_tf@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd30"
          }
        ]
      }
    },
    {
      name: "Topics in Indian Philosophy",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Alexander Bruce Watson",
            email: "alex.watson@ashoka.edu.in",
            _id: "62417c75d0f6703b61f4dd34"
          }
        ],
        TFs: []
      }
    },
    {
      name: "History of Early Analytic Philosophy",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Sharon Berry",
            email: "sharon.berry@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd38"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Introduction to Environmental Communication",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "Nithya Subramanian",
            email: "nithya.subramanian@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd3c"
          },
          {
            name: "Tisha Srivastav",
            email: "tisha.srivastav@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd3d"
          }
        ],
        TFs: [
          {
            name: "Shreya Pothula",
            email: "shreya.pothula_ug21@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd3e"
          }
        ]
      }
    },
    {
      name: "Buddhist Ethics",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Tatyana Aleksandrovna Kostochka",
            email: "tatyana.kostochka@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd42"
          }
        ],
        TFs: [
          {
            name: "Yash Agarwal",
            email: "yash.agarwal_ug22@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd43"
          }
        ]
      }
    },
    {
      name: "Introduction to Political Theory",
      department: "POL",
      faculty: {
        professors: [
          {
            name: "Sunil Khilnani",
            email: "sunil.khilnani@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd47"
          }
        ],
        TFs: [
          {
            name: "Bharat Sharma",
            email: "bharat.sharma_tf@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd48"
          },
          {
            name: "Ruchika Khanna",
            email: "ruchika.khanna_tf@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd49"
          },
          {
            name: "Vibhu Agiwal",
            email: "vibhu.agiwal_ug22@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd4a"
          },
          {
            name: "Zinnia Girdhar",
            email: "zinnia.girdhar_asp22@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd4b"
          }
        ]
      }
    },
    {
      name: "Environment and Social Exclusion",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Mukul Sharma",
            email: "mukul.sharma@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd4f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Conservation of Wildlife Populations",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Divya Vasudev",
            email: "divya.vasudev@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd53"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Force and Motion in Biology",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Anup Padmanabhan",
            email: "anup.padmanabhan@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd57"
          },
          {
            name: "Gautam Iqbal Menon",
            email: "gautam.menon@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd58"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Evolutionary Genetics",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Sudipta Tung",
            email: "sudipta.tung@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd5c"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Lab Course 5",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Balaji Chattopadhyay",
            email: "balaji.chattopadhyay@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd60"
          },
          {
            name: "Shubhasis Haldar",
            email: "shubhasis.haldar@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd61"
          }
        ],
        TFs: [
          {
            name: "Debojyoti Chowdhury",
            email: "debojyoti.chowdhury_phd21@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd62"
          },
          {
            name: "Deep Chaudhuri",
            email: "deep.chaudhuri_ga@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd63"
          },
          {
            name: "Deep Chaudhuri",
            email: "deep.chaudhuri_phd21@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd64"
          },
          {
            name: "Soham Chakraborty",
            email: "soham.chakraborty_phd19@ashoka.edu.in",
            _id: "62417c76d0f6703b61f4dd65"
          }
        ]
      }
    },
    {
      name: "Climate Change and Biotic Evolution",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Balaji Chattopadhyay",
            email: "balaji.chattopadhyay@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd69"
          }
        ],
        TFs: []
      }
    },
    {
      name: "History on the Couch: Psychoanalysis and the Historical Method",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Aparna Vaidik",
            email: "aparna.vaidik@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd6d"
          }
        ],
        TFs: [
          {
            name: "Priya Sanyal",
            email: "priya.sanyal_asp22@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd6e"
          },
          {
            name: "Yukti Saumya",
            email: "yukti.saumya_asp22@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd6f"
          }
        ]
      }
    },
    {
      name: "Advance General Chemistry Laboratory",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Deepak Asthana",
            email: "deepak.asthana@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd73"
          }
        ],
        TFs: [
          {
            name: "Gargee Roy",
            email: "gargee.roy_phd21@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd74"
          }
        ]
      }
    },
    {
      name: "Mechanistic organic  chemistry II",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Vidya Dnyaneshwar Avasare",
            email: "vidya.avasare@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd78"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Women on the Move: Gendered Travel in the Indian Ocean",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Mahmood Kooriadathodi",
            email: "mahmood.kooriadathodi@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd7c"
          }
        ],
        TFs: [
          {
            name: "Karil Soral",
            email: "karil.soral_phd21@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd7d"
          }
        ]
      }
    },
    {
      name: "Stone, Paper, Bamboo, Silk: Sinophone Textual Cultures",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Eloise Wright",
            email: "eloise.wright@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd81"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Chinese Pasts: “Ancient China” Through Contemporary Eyes",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Eloise Wright",
            email: "eloise.wright@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd85"
          }
        ],
        TFs: []
      }
    },
    {
      name: "History of Modern China: Empire and its Aftermath",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Sayantani Mukherjee",
            email: "sayantani.mukherjee@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd89"
          }
        ],
        TFs: [
          {
            name: "Jyotishman Mudiar",
            email: "jyotishman.mudiar_phd21@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd8a"
          }
        ]
      }
    },
    {
      name: "Borderlands: Towards a Spatial History of Empire",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Sayantani Mukherjee",
            email: "sayantani.mukherjee@ashoka.edu.in",
            _id: "62417c77d0f6703b61f4dd8e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "A Cultural Reading of India and China: Connections and Networks",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Barnali Chanda",
            email: "barnali.chanda@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dd92"
          }
        ],
        TFs: [
          {
            name: "Suvradeep Banerjee",
            email: "suvradeep.banerjee_ma23@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dd93"
          }
        ]
      }
    },
    {
      name: "Persian II",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Nadeem Aktar",
            email: "nadeem.akhtar@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dd97"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Persian - IV",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Nadeem Aktar",
            email: "nadeem.akhtar@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dd9b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Apparitions of Macbeth",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Jonathan Gil Harris",
            email: "jgharris@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dd9f"
          }
        ],
        TFs: [
          {
            name: "Kiana Manian",
            email: "kiana.manian_asp22@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dda0"
          }
        ]
      }
    },
    {
      name: "Introduction to Poetry",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Sumana Roy Ghosh",
            email: "sumana.roy@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dda4"
          }
        ],
        TFs: [
          {
            name: "Anindita Mukherjee",
            email: "anindita.mukherjee_phd20@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dda5"
          },
          {
            name: "Purvai Aranya",
            email: "purvai.aranya_tf@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4dda6"
          }
        ]
      }
    },
    {
      name: "Introduction to Poetry",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Sumana Roy Ghosh",
            email: "sumana.roy@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddaa"
          }
        ],
        TFs: [
          {
            name: "Anindita Mukherjee",
            email: "anindita.mukherjee_phd20@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddab"
          },
          {
            name: "Purvai Aranya",
            email: "purvai.aranya_tf@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddac"
          }
        ]
      }
    },
    {
      name: "Chorality",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Mali Annika Skotheim",
            email: "mali.skotheim@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddb0"
          }
        ],
        TFs: [
          {
            name: "Dhruvan D Nair",
            email: "dhruvan.nair_asp22@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddb1"
          }
        ]
      }
    },
    {
      name: "Disease Biology",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Alok Bhattacharya",
            email: "alok.bhattacharya@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddb5"
          },
          {
            name: "L S Shashidhara",
            email: "ls.shashidhara@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddb6"
          },
          {
            name: "Shahid Jameel",
            email: "shahid.jameel@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddb7"
          }
        ],
        TFs: [
          {
            name: "Krishnapriya Vinod",
            email: "krishnapriya.vinod_phd21@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddb8"
          }
        ]
      }
    },
    {
      name: "Gender Lens Reporting",
      department: "MS",
      faculty: {
        professors: [
          {
            name: "Neha Dixit",
            email: "neha.dixit@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddbc"
          }
        ],
        TFs: [
          {
            name: "Muskaan Kanodia",
            email: "muskaan.kanodia_asp22@ashoka.edu.in",
            _id: "62417c78d0f6703b61f4ddbd"
          }
        ]
      }
    },
    {
      name: "Fundamentals of Entrepreneurial Finance",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Divya Krishnan",
            email: "divya.krishnan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddc1"
          },
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddc2"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddc3"
          }
        ],
        TFs: [
          {
            name: "Ananya Sharma",
            email: "ananya.sharma_tf@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddc4"
          }
        ]
      }
    },
    {
      name: "#TheDigitalProfessional",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddc8"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddc9"
          }
        ],
        TFs: [
          {
            name: "Sanjana Hira",
            email: "sanjana.hira_asp22@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddca"
          }
        ]
      }
    },
    {
      name: "Fundamentals of Investing",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Dinne Manoj Kumar Reddy",
            email: "manoj.dinne@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddce"
          },
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddcf"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddd0"
          }
        ],
        TFs: [
          {
            name: "Satvik Agarwal",
            email: "satvik.agarwal_ug22@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddd1"
          }
        ]
      }
    },
    {
      name: "Business Analysis and Strategy",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddd5"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddd6"
          }
        ],
        TFs: [
          {
            name: "Ananya Sharma",
            email: "ananya.sharma_tf@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddd7"
          },
          {
            name: "Srishti Nanda",
            email: "srishti.nanda_tf@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddd8"
          }
        ]
      }
    },
    {
      name: "Theory and Practice of Leadership",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Ekanto Ghosh",
            email: "ekanto.ghosh@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dddc"
          },
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dddd"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddde"
          }
        ],
        TFs: [
          {
            name: "Shubha Mahajan",
            email: "shubha.mahajan_tf@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dddf"
          }
        ]
      }
    },
    {
      name: "Real Estate and Investments",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dde3"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dde4"
          }
        ],
        TFs: [
          {
            name: "Shubha Mahajan",
            email: "shubha.mahajan_tf@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dde5"
          },
          {
            name: "Srishti Nanda",
            email: "srishti.nanda_tf@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4dde6"
          }
        ]
      }
    },
    {
      name: "Economics of Social Finance",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddea"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddeb"
          }
        ],
        TFs: [
          {
            name: "Radhika Banerjee",
            email: "radhika.banerjee_ug22@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddec"
          }
        ]
      }
    },
    {
      name: "How to Start a Startup",
      department: "ENT",
      faculty: {
        professors: [
          {
            name: "Ekanto Ghosh",
            email: "ekanto.ghosh@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddf0"
          },
          {
            name: "Priyank Narayan",
            email: "priyank.narayan@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddf1"
          },
          {
            name: "Sagar Singhal",
            email: "sagar.singhal@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddf2"
          }
        ],
        TFs: [
          {
            name: "Kavya Satish",
            email: "kavya.satish_ug22@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddf3"
          }
        ]
      }
    },
    {
      name: "In Situ: architecture, sculpture and painting in the Western Himalayas",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Latika Gupta",
            email: "latika.gupta@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddf7"
          }
        ],
        TFs: [
          {
            name: "Abhinanda Lahiri",
            email: "abhinanda.lahiri_mls22@ashoka.edu.in",
            _id: "62417c79d0f6703b61f4ddf8"
          }
        ]
      }
    },
    {
      name: "Collectivism in Art: Nodes from the 20th and early 21st Century",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Srinivas Adiya Mopidevi",
            email: "srinivas.mopidevi@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4ddfc"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Negotiating Nature in the Early Modern World",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Pratyay Nath",
            email: "pratyay.nath@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de00"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Environmental Economics",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Shivani Wadehra",
            email: "shivani.wadehra@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de04"
          }
        ],
        TFs: [
          {
            name: "Gurkirat Singh",
            email: "gurkirat.singh_asp22@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de05"
          },
          {
            name: "Isha Chakravarthy",
            email: "isha.chakravarthy_asp22@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de06"
          }
        ]
      }
    },
    {
      name: "Economics of Waste",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Shivani Wadehra",
            email: "shivani.wadehra@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de0a"
          }
        ],
        TFs: [
          {
            name: "Mira Sachdev",
            email: "mira.sachdev_asp22@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de0b"
          },
          {
            name: "Vivaan Madhok",
            email: "vivaan.madhok_asp22@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de0c"
          }
        ]
      }
    },
    {
      name: "Renewable  Energy",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Deepak Asthana",
            email: "deepak.asthana@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de10"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Research Project",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Aryya Ghosh",
            email: "aryya.ghosh@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de14"
          },
          {
            name: "Basudeb Maji",
            email: "basudeb.maji@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de15"
          },
          {
            name: "Deepak Asthana",
            email: "deepak.asthana@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de16"
          },
          {
            name: "Munmun Ghosh",
            email: "munmun.ghosh@ashoka.edu.in",
            _id: "62417c7ad0f6703b61f4de17"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Interdisciplinary Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "CW: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ES: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "MS: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "PA: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "VA: Thesis",
      department: "MLS",
      faculty: {
        professors: [
          {
            name: "Preeti Bahadur Ramaswami",
            email: "preeti.ramaswami@ashoka.edu.in",
            _id: "62417c7bd0f6703b61f4de2a"
          },
          {
            name: "Sraman Mukherjee",
            email: "sraman.mukherjee@ashoka.edu.in",
            _id: "62417c7bd0f6703b61f4de2b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "CS: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "IR: Thesis",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "PHI: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "CW: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ENG: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ES: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "MS: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "PA: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "SOA: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "CS: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "IR: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "POL: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "PSY: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ENT: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "ECO: Research Practicum II",
      department: "MLS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Making of the Indian Republic",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Aparna Vaidik",
            email: "aparna.vaidik@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de5c"
          }
        ],
        TFs: [
          {
            name: "Aritro Sarkar",
            email: "aritro.sarkar_asp22@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de5d"
          },
          {
            name: "Barathy M G",
            email: "barathy.mg_phd21@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de5e"
          }
        ]
      }
    },
    {
      name: "Psychopathology",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de62"
          }
        ],
        TFs: [
          {
            name: "Gurveen Khanuja",
            email: "gurveen.khanuja_asp22@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de63"
          },
          {
            name: "Maitrayee Sen",
            email: "maitrayee.sen_phd19@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de64"
          },
          {
            name: "Ninaad Kulshreshtha",
            email: "ninaad.kulshreshtha_tf@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de65"
          }
        ]
      }
    },
    {
      name: "Early Childhood Development",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de69"
          }
        ],
        TFs: [
          {
            name: "Anika Ghei",
            email: "anika.ghei_asp22@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de6a"
          },
          {
            name: "Shivangi Khattar",
            email: "shivangi.khattar_phd21@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de6b"
          }
        ]
      }
    },
    {
      name: "Seminar Series",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Aryya Ghosh",
            email: "aryya.ghosh@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de6f"
          },
          {
            name: "Basudeb Maji",
            email: "basudeb.maji@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de70"
          },
          {
            name: "Deepak Asthana",
            email: "deepak.asthana@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de71"
          },
          {
            name: "Munmun Ghosh",
            email: "munmun.ghosh@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de72"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Chemicals to Chemopreventives",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Basudeb Maji",
            email: "basudeb.maji@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de76"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Science, Everyday Life and Climate Change",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Anshu Ogra ",
            email: "anshu.ogra@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de7a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Talking about Trees",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Vijay Ramprasad ",
            email: "vijay.ramprasad@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de7e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Natural Resource Governance",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Vijay Ramprasad ",
            email: "vijay.ramprasad@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de82"
          }
        ],
        TFs: [
          {
            name: "Vibhu Agiwal",
            email: "vibhu.agiwal_ug22@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de83"
          }
        ]
      }
    },
    {
      name: "Publishing Seminar",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Arpita Das",
            email: "arpita.das@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de87"
          }
        ],
        TFs: [
          {
            name: "Yamini Krishnan",
            email: "yamini.krishnan_asp22@ashoka.edu.in",
            _id: "62417c7dd0f6703b61f4de88"
          }
        ]
      }
    },
    {
      name: "Reading History",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Neeladri Bhattacharya",
            email: "neeladri.bhattacharya@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de8c"
          }
        ],
        TFs: [
          {
            name: "Advaith Jayakumar",
            email: "advaith.jayakumar_ug22@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de8d"
          }
        ]
      }
    },
    {
      name: "Statistical Inference I",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Kumarjit Saha",
            email: "kumarjit.saha@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de91"
          }
        ],
        TFs: [
          {
            name: "Ojas Dhiman",
            email: "ojas.dhiman_tf@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de92"
          }
        ]
      }
    },
    {
      name: "Introduction to Mandarin Level II",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Shao Chin",
            email: "shao.chin@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de96"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Data Science: Sports",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de9a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Workshop in Translating Indian Poetry",
      department: "CW",
      faculty: {
        professors: [
          {
            name: "Arunava Sinha",
            email: "arunava.sinha@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4de9e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Capstone Thesis",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Preeti Bahadur Ramaswami",
            email: "preeti.ramaswami@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4dea2"
          },
          {
            name: "Rakhi Peswani",
            email: "rakhi.peswani@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4dea3"
          },
          {
            name: "Sraman Mukherjee",
            email: "sraman.mukherjee@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4dea4"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Critical Thinking Seminar: Critical Bhakti",
      department: "ENG",
      faculty: {
        professors: [],
        TFs: [
          {
            name: "Nitya Pawar",
            email: "nitya.pawar_ga@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4dea8"
          },
          {
            name: "Nitya Pawar",
            email: "nitya.pawar_phd18@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4dea9"
          },
          {
            name: "Tanay Sane",
            email: "tanay.sane_asp22@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4deaa"
          }
        ]
      }
    },
    {
      name: "Independent Study Module: Chalmers' Constructing the World",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Sharon Berry",
            email: "sharon.berry@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4deae"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Will Covid-19 Pandemic Kill Globalization?",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Nayan Ranjan Chanda",
            email: "nayan.chanda@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4deb2"
          }
        ],
        TFs: [
          {
            name: "Manvi Agarwal",
            email: "manvi.agarwal_asp22@ashoka.edu.in",
            _id: "62417c7ed0f6703b61f4deb3"
          }
        ]
      }
    },
    {
      name: "Gender Matters in Global Politics",
      department: "IR",
      faculty: {
        professors: [
          {
            name: "Ananya Sharma",
            email: "ananya.sharma@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4deb7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Research Methodology and Ethics",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Munmun Ghosh",
            email: "munmun.ghosh@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4debb"
          },
          {
            name: "Shubhasis Haldar",
            email: "shubhasis.haldar@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4debc"
          }
        ],
        TFs: [
          {
            name: "Soham Chakraborty",
            email: "soham.chakraborty_ga@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4debd"
          },
          {
            name: "Soham Chakraborty",
            email: "soham.chakraborty_phd19@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4debe"
          }
        ]
      }
    },
    {
      name: "Independent Study Module: Development of intersensory perception in at risk infants from 3-9 months",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4dec2"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Inclusion of Persons with Disabilities in Organisations",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4dec6"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: The Intergenerational Transmission of Violence",
      department: ".A.",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4deca"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Complex Trauma in Domestic Violence in India",
      department: ".A.",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4dece"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Self Efficacy and Locus of Control as variables of interest in Intimate Partner Violence Outcomes",
      department: ".A.",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4ded2"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Mathematical Foundations of Data Sciences",
      department: "MAT",
      faculty: {
        professors: [
          {
            name: "Kumarjit Saha",
            email: "kumarjit.saha@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4ded6"
          }
        ],
        TFs: [
          {
            name: "Maruf Alam Tarafdar",
            email: "maruf.tarafdar_tf@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4ded7"
          }
        ]
      }
    },
    {
      name: "Advanced Topics in Probability",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Sandeep Juneja ",
            email: "sandeep.juneja@ashoka.edu.in",
            _id: "62417c7fd0f6703b61f4dedb"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Qualitative research on donating behaviour",
      department: ".A.",
      faculty: {
        professors: [
          {
            name: "Purnima Mehrotra",
            email: "purnima.mehrotra@ashoka.edu.in",
            _id: "62417c80d0f6703b61f4dedf"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Faculty Experience During Pandemic",
      department: ".A.",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c80d0f6703b61f4dee3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Dominance Status And Social Preference In Zebrafish",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Bittu R",
            email: "bittu@ashoka.edu.in",
            _id: "62417c80d0f6703b61f4dee7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Understanding the Applications of Machine Learning in Economic Research",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Kush Khurana",
            email: "kush.khurana@ashoka.edu.in",
            _id: "62417c80d0f6703b61f4deeb"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Covid-19 and Inequality in India",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Subrata Kumar Ritadhi",
            email: "sk.ritadhi@ashoka.edu.in",
            _id: "62417c80d0f6703b61f4deef"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Pratyay Nath",
            email: "pratyay.nath@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4deff"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [],
        TFs: []
      }
    },
    {
      name: "Reading Sources II",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Srinath Raghavan",
            email: "srinath.raghavan@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df06"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: The Intergenerational Transmission of Violence",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df0a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Semantics of Natural Language",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Eric Paul Snyder",
            email: "eric.snyder@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df0e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: COMET Study with UPenn",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Avantika Bhatia",
            email: "avantika.bhatia@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df12"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Labour: Theory and Practice",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Mekhala Krishnamurthy",
            email: "mekhala.krishnamurthy@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df16"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Intergroup Relations Lab",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Sramana Majumdar",
            email: "sramana.majumdar@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df1a"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Role of T-cells in viral infections",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Rama Sundari Akondy",
            email: "rama.akondy@ashoka.edu.in",
            _id: "62417c81d0f6703b61f4df1e"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Understanding Development",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Ravindran S",
            email: "ravindran.sriramachandran@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df22"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Political Ecology and the Modes of Resistance",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Mitul Baruah",
            email: "mitul.baruah@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df26"
          }
        ],
        TFs: [
          {
            name: "Anjali",
            email: "anjali_ug22@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df27"
          }
        ]
      }
    },
    {
      name: "Independent Study Module: Data Analytics for Air Quality Assessment",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Anirban Mondal",
            email: "anirban.mondal@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df2b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Data Analytics of Air Quality Assessment",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Anirban Mondal",
            email: "anirban.mondal@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df2f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Methods in Ecology and Conservation Science",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Meghna Agarwala",
            email: "meghna.agarwala@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df33"
          },
          {
            name: "Shivani",
            email: "shivani.krishna@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df34"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Reading the Twentieth Century",
      department: "HIS",
      faculty: {
        professors: [
          {
            name: "Sunil Khilnani",
            email: "sunil.khilnani@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df38"
          }
        ],
        TFs: [
          {
            name: "Aranya Singh Rathore",
            email: "aranya.rathore_ug22@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df39"
          },
          {
            name: "Arpit Tanul",
            email: "arpit.tanul_asp22@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df3a"
          }
        ]
      }
    },
    {
      name: "The New Geography of the Information Age",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df3e"
          }
        ],
        TFs: [
          {
            name: "Aakash Madhav Rao",
            email: "aakash.rao_ug23@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df3f"
          },
          {
            name: "Khushi Mehta",
            email: "khushi.mehta_ug22@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df40"
          },
          {
            name: "Manish Rajani",
            email: "manish.rajani_ug22@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df41"
          },
          {
            name: "Saravana Chilamakuri",
            email: "saravana.chilamakuri_ug22@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df42"
          }
        ]
      }
    },
    {
      name: "On Photography: Histories, Theories, and Practices",
      department: "VA",
      faculty: {
        professors: [
          {
            name: "Rakhi Peswani",
            email: "rakhi.peswani@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df46"
          },
          {
            name: "Sraman Mukherjee",
            email: "sraman.mukherjee@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df47"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Faculty Experience of the Pandemic",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c82d0f6703b61f4df4b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Moral Laziness and Blameworthiness II",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Daniel Benjamin Weltman",
            email: "danny.weltman@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df4f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Land Restoration And Ecological Resilience",
      department: "ES",
      faculty: {
        professors: [
          {
            name: "Meghna Agarwala",
            email: "meghna.agarwala@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df53"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Immune Gene Correlation to Breast Cancer Prognosis",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "L S Shashidhara",
            email: "ls.shashidhara@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df57"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Art and Architecture of the Medieval World",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Alexandra Cassatt Verini",
            email: "alexandra.verini@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df5b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Hardware-based Memory Encryption: Primitives, Modules and Intel SGX",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Mahabir Prasad Jhanwar",
            email: "mahavir.jhawar@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df5f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: IIRL-Contact study, Misinformation study",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Sramana Majumdar",
            email: "sramana.majumdar@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df63"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Human-Computer Interaction",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df67"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Advanced Algorithmic Economics",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df6b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Cognitive, social and emotional development in infants and toddlers",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c83d0f6703b61f4df6f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Social Interaction During Object-directed Communication in At-risk and Typically Developing Infants",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df73"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Grammar of Play Assessment",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df77"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Diversity, Inclusion and Neuro-Developmental Disorders II",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df7b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Perinatal Mental Health Research",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df7f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: State, Stateless Societies and Problems of Power",
      department: "SOA",
      faculty: {
        professors: [
          {
            name: "Swargajyoti Gohain",
            email: "swargajyoti.gohain@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df83"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Exploring Indian Music",
      department: "PA",
      faculty: {
        professors: [
          {
            name: "Achintya Prahlad",
            email: "achintya.prahlad@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df87"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Women and Career Development",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Avantika Bhatia",
            email: "avantika.bhatia@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df8b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Biostatistics and Bioinformatics",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Alok Bhattacharya",
            email: "alok.bhattacharya@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df8f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Tumor Immunology",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "L S Shashidhara",
            email: "ls.shashidhara@ashoka.edu.in",
            _id: "62417c84d0f6703b61f4df93"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Couple Cluster Theory and Applications",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Aryya Ghosh",
            email: "aryya.ghosh@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4df97"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Introduction to Second Quantization",
      department: "CHM",
      faculty: {
        professors: [
          {
            name: "Aryya Ghosh",
            email: "aryya.ghosh@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4df9b"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Intersectionality and Collective Action",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Rashmi Nair",
            email: "rashmi.nair@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4df9f"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: White/Black Hole Analogs in Circular Hydraulic Jumps: An Experimental Study",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Pramoda Kumar",
            email: "pramoda.kumar@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4dfa3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: invertebrate models of social stress",
      department: "BIO",
      faculty: {
        professors: [
          {
            name: "Simantini Ghosh",
            email: "simi@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4dfa7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Access to Credit: Evaluating the Impact of Private Bank Expansion on Financial Inclusion",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Subrata Kumar Ritadhi",
            email: "sk.ritadhi@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4dfab"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Data Narratives",
      department: "ECO",
      faculty: {
        professors: [
          {
            name: "Kanika Mahajan",
            email: "kanika.mahajan@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4dfaf"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Project BLOOM",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4dfb3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Neurodevelopmental Disorders",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c85d0f6703b61f4dfb7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Neurodevelopmental Disorders",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfbb"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Moral Psychology",
      department: "PHI",
      faculty: {
        professors: [
          {
            name: "Tatyana Aleksandrovna Kostochka",
            email: "tatyana.kostochka@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfbf"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Impact of COVID19 pandemic on therapeutic management of child with NDD",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfc3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: MDMA on Zebrafish: Optimism Bias and Mechanism of Action",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Bittu R",
            email: "bittu@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfc7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Cross-linguistic and developmental differences in bilingual children",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfcb"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: The use of sound and breath for well-being",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Manon Grube",
            email: "manon.grube@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfcf"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Temporal windows of sensory integration: from milliseconds to the duration of the Now",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Manon Grube",
            email: "manon.grube@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfd3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Project Bloom",
      department: "PSY",
      faculty: {
        professors: [
          {
            name: "Madhavi Latha Kari",
            email: "madhavi.maganti@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfd7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Web Exploitation",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c86d0f6703b61f4dfdb"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: MLOps",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Debayan Gupta",
            email: "debayan.gupta@ashoka.edu.in",
            _id: "62417c87d0f6703b61f4dfdf"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Playing Goemkarponn: Exploring Goan Music and Identity",
      department: "ENG",
      faculty: {
        professors: [
          {
            name: "Alexandra Cassatt Verini",
            email: "alexandra.verini@ashoka.edu.in",
            _id: "62417c87d0f6703b61f4dfe3"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Itemset Placement in Retail",
      department: "CS",
      faculty: {
        professors: [
          {
            name: "Anirban Mondal",
            email: "anirban.mondal@ashoka.edu.in",
            _id: "62417c87d0f6703b61f4dfe7"
          }
        ],
        TFs: []
      }
    },
    {
      name: "Independent Study Module: Complex Systems Approaches to Epidemiological Modeling",
      department: "PHY",
      faculty: {
        professors: [
          {
            name: "Gautam Iqbal Menon",
            email: "gautam.menon@ashoka.edu.in",
            _id: "62417c87d0f6703b61f4dfeb"
          }
        ],
        TFs: []
      }
    }
  ]
}