import { useState, useEffect } from "react";
import { MapPinned } from "lucide-react";

type userA = {
  name: string;
  from: string;
  wantToLearn: string[];
  wantToTeach: string[];
}
type user = {
  id: number;
  name: string;
  from: string;
  wantToLearn: string[];
  wantToTeach: string[];
}

const usersList: user[] = [
  {
    id: 2, name: "Ahmed", from: "Karachi, PK", wantToLearn: ["Node.js", "Mobile App Design"], wantToTeach: ["Web Development", "Graphic Design"]},
  {
    id: 3, name: "Usman", from: "Lahore, PK", wantToLearn: ["SEO", "Content Writing"], wantToTeach: ["Web Development", "Graphic Design"]},
  {
    id: 4, name: "Ayesha", from: "Islamabad, PK", wantToLearn: ["React", "Backend APIs"], wantToTeach: ["Web Development", "Graphic Design"]},
  {
    id: 5, name: "Sara", from: "Karachi, PK", wantToLearn: ["UI/UX Design", "React.js"], wantToTeach: ["Web Development", "Node.js"]},
  {
    id: 6, name: "Hassan", from: "London, UK", wantToLearn: ["Backend APIs", "React"], wantToTeach: ["Web Development", "Graphic Design"]},
  {
    id: 7, name: "Farwa", from: "Dubai, UAE", wantToLearn: ["React", "Backend APIs"], wantToTeach: ["Web Development", "Graphic Design"]},
  {
    id: 8, name: "Faizan Ahmad", from: "Faisalabad, PK", wantToLearn: ["React", "Next.js"], wantToTeach: ["SEO", "Digital Marketing"]},
  {
   id: 9, name: "Zain", from: "Multan, PK", wantToLearn: ["Freelancing", "Upwork"], wantToTeach: ["Graphic Design", "Logo Design"]},
  {
    id: 10, name: "Hira", from: "Lahore, PK", wantToLearn: ["Content Writing", "Copywriting"], wantToTeach: ["Social Media Marketing", "Facebook Ads"]},
  {
    id: 11, name: "Ali Raza", from: "Islamabad, PK", wantToLearn: ["UI/UX Design", "Figma"], wantToTeach: ["Freelancing", "Fiverr"]},
  {
    id: 12, name: "Fatima", from: "Karachi, PK", wantToLearn: ["SEO", "Blogging"], wantToTeach: ["Content Writing", "Copywriting"]},
  {
    id: 13, name: "Hamza", from: "Peshawar, PK", wantToLearn: ["React Native", "Mobile Apps"], wantToTeach: ["JavaScript", "Frontend Development"]},
  {
    id: 14, name: "Sana", from: "Dubai, UAE", wantToLearn: ["Freelancing", "Client Hunting"], wantToTeach: ["Digital Marketing", "Instagram Growth"]},
  {
    id: 15,name: "Owais",from: "Lahore, PK", wantToLearn: ["Backend APIs", "Node.js"],wantToTeach: ["MongoDB", "Database Design"]},
  {
    id: 16, name: "Nimra", from: "Karachi, PK",wantToLearn: ["Graphic Design", "Branding"],wantToTeach: ["Canva", "Social Media Posts"] },
  {
    id: 17, name: "Talha", from: "Islamabad, PK", wantToLearn: ["YouTube Automation", "Video Editing"], wantToTeach: ["SEO", "Keyword Research"]},
   {
    id: 18, name: "John Smith", from: "New York, USA", wantToLearn: ["React", "GraphQL"], wantToTeach: ["Digital Marketing", "SEO"]},
  {
    id: 19, name: "Emily Chen", from: "Toronto, Canada", wantToLearn: ["Node.js", "Backend APIs"], wantToTeach: ["UI/UX Design", "Figma"]},
  {
    id: 20, name: "Carlos Mendes", from: "Lisbon, Portugal", wantToLearn: ["Freelancing", "Upwork"], wantToTeach: ["Video Editing", "YouTube Automation"]},
  {
    id: 21, name: "Sophie Martin", from: "Paris, France", wantToLearn: ["SEO", "Content Strategy"], wantToTeach: ["Copywriting", "Branding"]},
  {
    id: 22,name: "Liam O’Connor",from: "Dublin, Ireland",wantToLearn: ["React Native", "Mobile Apps"],wantToTeach: ["JavaScript", "Frontend Development"]},
  {
    id: 23,name: "Aarav Sharma",from: "Delhi, India",wantToLearn: ["Backend APIs", "System Design"],wantToTeach: ["Node.js", "MongoDB"]},
  {
    id: 24,name: "Yuki Tanaka",from: "Tokyo, Japan",wantToLearn: ["Graphic Design", "Illustration"],wantToTeach: ["Animation", "After Effects"]},
  {
    id: 25,name: "Amelia Brown",from: "Sydney, Australia",wantToLearn: ["Social Media Marketing", "Instagram Growth"],wantToTeach: ["Content Writing", "Blogging"]},
  {
    id: 26,name: "Omar Hassan",from: "Cairo, Egypt",wantToLearn: ["React", "Frontend Development"],wantToTeach: ["Freelancing", "Fiverr"]},
  {
    id: 27,name: "Lucas Silva",from: "São Paulo, Brazil",wantToLearn: ["SEO", "Keyword Research"],wantToTeach: ["YouTube Automation", "Video Editing"]},
  {
    id: 28,name: "Anna Müller",from: "Berlin, Germany",wantToLearn: ["Figma", "UI Systems"],wantToTeach: ["UX Research", "Wireframing"]},
  {
    id: 29,name: "David Kim",from: "Seoul, South Korea",wantToLearn: ["Backend APIs", "Microservices"],wantToTeach: ["Java", "Spring Boot"]},
  {
    id: 30, name: "Isabella Rossi",from: "Milan, Italy",wantToLearn: ["Branding", "Graphic Design"],wantToTeach: ["Adobe Illustrator", "Logo Design"]}
];


export default function Users() {
  const [match, setMatch] = useState<user[]>([])
  const [currentUser, setCurrentUser] = useState<userA>({
    name: "Faizan",
    from: "Lahore, PK",
    wantToLearn: [],
    wantToTeach: []
  });

  const userWantToLearn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser({
      ...currentUser,
      wantToLearn: e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill !== "")
    })
  }
  const userWantToTeach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUser({
      ...currentUser,
      wantToTeach: e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill !== "")
    })
  }

const handleMatch = () => {
  const matchedUsers = usersList.filter(user =>

    user.wantToLearn.some(skill =>
      currentUser.wantToTeach.some(s =>
        skill.toLowerCase().includes(s.toLowerCase()) ||
        s.toLowerCase().includes(skill.toLowerCase())
      )
    ) &&

    user.wantToTeach.some(skill =>
      currentUser.wantToLearn.some(s =>
        skill.toLowerCase().includes(s.toLowerCase()) ||
        s.toLowerCase().includes(skill.toLowerCase())
      )
    )

  );
  setMatch(matchedUsers);
};


useEffect(() => {
  console.log("Match state:", match);
}, [match]);

  return (
    <>
      {/* */}
      <section className="bg-linear-to-r from-white to-secondary/30 w-full p-4 sm:p-10">
        <div className="space-y-8 sm:space-y-10 p-2 sm:p-5 max-w-6xl mx-auto">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gradient">
              Find your perfect swap
            </h1>
            <p className="text-gray-500 mt-2">
              <span className="text-secondary">Exchange skills</span> with the right people
            </p>
          </div>

          {/* */}
          <div className="bg-white rounded-2xl border-2 border-secondary p-6 sm:p-10 space-y-4 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="flex flex-col gap-2">
                <label className="text-gradient text-lg font-medium mb-1">
                  I want to learn
                </label>
                <input
                  type="text"
                  placeholder="Enter the skill you want to learn"
                  onChange={userWantToLearn}
                  className="p-2 rounded-md border-2 border-secondary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gradient text-lg font-medium mb-1">
                  I can teach
                </label>
                <input
                  type="text"
                  placeholder="Enter the skill you can teach"
                  onChange={userWantToTeach}
                  className="border-2 border-secondary p-2 rounded-md "
                />
              </div>
            </div>

            <button
              onClick={handleMatch}
              className="mt-2 w-full btn-gradient hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg shadow-gray-500"
            >
              Find Matches
            </button>
          </div>
        </div>
      </section>

      {/* */}
      <section className="mt-6 sm:mt-10 p-4 sm:p-8">
        <div className="w-full max-w-6xl mx-auto">
        {match.length === 0 ? (
          <p className="text-lg text-center text-gray-500">
            No match found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {match.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5 border-2 border-secondary"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h2 className="font-bold text-xl sm:text-2xl text-gradient">
                    {user.name}
                  </h2>
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                    <MapPinned className="w-4 h-4 shrink-0"/> {user.from}
                  </span>
                </div>

                {/* */}
                <div className="mb-3">
                  <p className="text-lg font-medium text-gradient">
                    Wants
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.wantToLearn.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-2 py-1 text-md rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* */}
                <div>
                  <p className="text-lg font-medium text-gradient">
                    Offers
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.wantToTeach.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-600 px-2 py-1 text-md rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-4 w-full btn-gradient hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg shadow-gray-500">
                  Connect To Learn
                </button>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>
    </>
  );
}