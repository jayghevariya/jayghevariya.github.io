import emoji from "react-easy-emoji";

export const greetings = {
	name: "Jay Ghevariya",
	title: "Hi all, I'm Jay",
	description:
		"I'm a pre-final year student, pursuing Computer Sciences at IIIT-H. I love programming and problem solving and am proficient in various programming languages like C# , C/C++, Python, JavaScript , Arduino Programming. App Development , Web Development , Blockchain , Machine Learnings Those are fields where my interest lies.",
	resumeLink:
		"https://drive.google.com/drive/folders/1WwkJUNoU8gbwezYvHdpICpEdifElFjil",
};

export const openSource = {
	githubUserName: "jayghevariya",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com/1hanzla100",
	instagram: "https://www.instagram.com/jerry_16_10_2/",
	twitter: "https://twitter.com/jay_ghevariya",
	github: "https://github.com/jayghevariya",
	linkedin: "https://www.linkedin.com/in/jay-ghevariya-49a4581b8/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) in React.js"
				),
				emoji("⚡ Building responsive static websites using Vannila JS and bootstrap"),
				emoji(
					"⚡ Building RESTful APIs in Express.js and Node.js"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				// {
				// 	skillName: "Re",
				// 	fontAwesomeClassname: "logos:grpc",
				// },
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "logos:flask",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting website on Heroku and Netlify"
				),
				emoji(
					"⚡ Effectively use of Github"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				// {
				// 	skillName: "AWS",
				// 	fontAwesomeClassname: "logos:aws",
				// },
				{
					skillName: "Netlify",
					fontAwesomeClassname: "logos:netlify",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				// {
				// 	skillName: "PostgreSQL",
				// 	fontAwesomeClassname: "logos:postgresql",
				// },
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				// {
				// 	skillName: "Github Actions",
				// 	fontAwesomeClassname: "logos:github-actions",
				// },
				// {
				// 	skillName: "Cloudinary",
				// 	fontAwesomeClassname: "logos:cloudinary",
				// },
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				// {
				// 	skillName: "Sentry",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		{
			title: "Database Services",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in using NoSQL and SQL Databases"
				),
				emoji(
					"⚡ Building webapps using MongoDB, MySQL, Firebase"
				),
				emoji(
					"⚡ Having experience in using LINQ in C#"
				),
			],
			softwareSkills: [
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "MYSQL",
					fontAwesomeClassname: "logos:mysql",
				},
				// {
				// 	skillName: "SQL",
				// 	fontAwesomeClassname: "logos:SQL",
				// },
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				// {
				// 	skillName: "Ganache",
				// 	fontAwesomeClassname: "logos:ganache-icon",
				// },
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Data Structures & Algorithms", 
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	
];

export const educationInfo = [
	{
		schoolName: "International Institute of Information Technology, Hyderabad",
		subHeader: "Bachelor of Technology in Computer Science and Engineering",
		duration: "November 2020 - Present",
		desc: "Participated in Open Source Deeloper Group as a Tech Mentor",
		CGPA: "7.54/10",
		descBullets: [
			"Participated in marketing team of college cultural fest",
			"Participated in many college events as a volunteer",
		],
	},
	{
		schoolName: "Aspire Public School",
		subHeader: "Higher Secondary Education",
		duration: "June 2018 - September 2020",
		desc: "School Topper in 12th Grade , JEE Mains Rank",
		grade: "Grade A",
		descBullets: [
			"AIR 848 in JEE Mains",
			"Lead the school in many sports events",
			"Lead the school's cultural festival",
		],
	},
];

export const experience = [

	{
		role: "Software Engineering Intern",
		company: "Metalok",
		companylogo: "/img/icons/common/Metalok.jpeg",
		date: "Mar 2022 – Jul 2022",
		desc: "I worked as frontend web developer and design their main website using ReactJs , Redux and ChartJs. I have Build 70% of the website components.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Software Enginner",
		company: "Tech Lift",
		companylogo: "/img/icons/common/TechLift.jpeg",
		date: "May 2022 - Aug 2022",
		desc: "I worked on charging station sync project where I have fetched data from different charging stations APIs and stored in SQL database with C#.",
	},
	{
		role: "Frontend Developer",
		company: "Aided",
		companylogo: "/img/icons/common/Aided.jpeg",
		date: "Jan 2022 – Apr 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Bootstrap, jQuery and some other libraries.",
	},
	{
		role: "Tech Mentor",
		company: "OSDG ( Open Source Developer Group )",
		companylogo: "/img/icons/common/OSDG.jpeg",
		date: "Aug 2021 - Jun 2022",
		desc: "I have mentored my college juniors in various web development and open source projects. and organized many workshops open source.",
	},
];

export const projects = [
	{
		name: "Canteen Portal",
		desc: "A canteen portal app based on MERN stack. It has functionalities to place an order, add food item to the list, fetch the status of order, and many more.",
		github: "https://github.com/jayghevariya/Canteen-MERN-APP",
		// link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "Friend Recommendation",
		desc: "A Friend Recommendation System is Terminal Based App in C using Data Structure and Algorithms inspired from Social Media App.",
		github: "https://github.com/coniferousdyer/Friends-Recommendation-System",
	},
	{
		name: "Event Management Database",
		desc: "Scratch implementation in python and mysql of DBMS including Query Optimisation with complex Systems.",
		github: "https://github.com/jayghevariya/Event-Manager-SQL",
	},
	{
		name: "Clash of Clans",
		desc: "Built a terminal-based arcade game in Python3 inspired from classic Clash of clans game based on OOPS ( Object Oriented Programming Systems) without using standard python gaming libraries.",
		github: "https://github.com/jayghevariya/ClashOfClans-PythonGame",
	},
	{
		name: "Bank Management System",
		desc: "Built a terminal-based management software in simple C language for a bank to manage its customers and their accounts. It has some basic functionalities like creating a new account, depositing money, withdrawing money, etc. and some advanced functionalities like travelling salesman problem and minimum number of notes from ATM.",
		github: "https://github.com/jayghevariya/AAD-Project",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Jay Ghevariya",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Jay Ghevariya",
	image: "https://drive.google.com/file/d/1-zS_nNkKdcGdl1PC5wPwtfx2CHVNKSCX/view?usp=sharing",
	url: "http://jayghevariya.me",
	keywords: [
		"Jay",
		"Jay Ghevariya",
		"@jayghevariya",
		"Portfolio",
		"Jay Patel",
		"Jay Portfolio ",
		"Jay Ghevariya Portfolio",
		"Jay Ghevariya Developer"
	],
}