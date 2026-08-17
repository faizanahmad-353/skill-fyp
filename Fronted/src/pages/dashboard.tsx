import { Link } from "react-router-dom"
import { BookOpen, MessageSquare, Star, Plus, Users, ArrowRight, CircleUser, MapPin } from "lucide-react"
function Dashboard() {
  const user = {
    name: "Faizan Ahmad",
    email: "[EMAIL_ADDRESS]",
    bio: "I am a software engineer",
    skills: [
      {
        name: "React",
        type: "OFFERED"
      },
      {
        name: "Node.js",
        type: "OFFERED"
      },
      {
        name: "React",
        type: "WANTED"
      },
      {
        name: "Node.js",
        type: "WANTED"
      }
    ]
  }
  const stats = [
    {
      name: 'Skills Offered',
      value: user?.skills?.filter((s: any) => s.skillType === 'OFFERED').length || 0,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Skills Wanted',
      value: user?.skills?.filter((s: any) => s.skillType === 'WANTED').length || 0,
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      name: 'Active Swaps',
      value: 0, // This would come from API
      icon: MessageSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      name: 'Average Rating',
      value: '4.5', // This would come from API
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
  ];

  const quickActions = [
    {
      name: 'Add Skills',
      description: 'Add skills you can offer or want to learn',
      icon: Plus,
      href: '/profile',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Find Users',
      description: 'Discover people to swap skills with',
      icon: Users,
      href: '/users',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      name: 'View Swaps',
      description: 'Check your current and past swaps',
      icon: MessageSquare,
      href: '/swaps',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Browse Skills',
      description: 'Explore available skills on the platform',
      icon: BookOpen,
      href: '/skills',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <>
      <section className="w-full">
        <div className="">
          <div className="flex flex-col gap-5 ">
            <div className="w-full flex flex-col gap-2 bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg p-10 rounded-2xl my-5">
              <h1 className="text-gradient text-3xl font-bold">Dashboard</h1>
              <p className="text-md text-gray-600">Welcome back, {user?.name}</p>
            </div>

            <div className="flex flex-col gap-5 w-full">

              {/* Stats */}
              <div className="flex flex-col gap-4 p-5 border-2 border-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out rounded-xl">
                <h2 className="text-3xl font-bold text-gradient px-1 border-b-2 border-secondary pb-3">
                  Stats
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-1 border-2 border-secondary hover:cursor-pointer hover:bg-blue-50 p-4 rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out"
                    >
                      <h3 className="text-sm font-bold text-gradient">
                        {stat.name}
                      </h3>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-4 p-5 border-2 border-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out rounded-xl">
                <h2 className="text-2xl font-bold text-gradient border-b-2 border-secondary pb-3">
                  Quick Actions
                </h2>
                <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out rounded-2xl p-4">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="flex flex-row items-center gap-3 border-2 border-secondary hover:bg-blue-50 p-3 rounded-xl hover:shadow-md hover:shadow-primary/50 transition-all duration-300 ease-in-out"
                    >
                      <action.icon size={22} className="text-blue-600 shrink-0" />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 min-w-0">
                        <h3 className="text-base font-bold text-gradient">
                          {action.name}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">{action.description}</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 ml-auto shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* recent swaps */}
      <section className="w-full my-10">
        <div className="flex flex-col gap-5 ">
          <div className="w-full flex flex-col gap-2 bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg p-10 rounded-2xl my-5">
            <div className="border-b-2 border-secondary pb-3">
              <h1 className="text-gradient text-3xl font-bold">Recent Swaps</h1>
            </div>
            <div className="flex flex-col items-center gap-5 p-10 ">
              <MessageSquare size={40} className="text-blue-600 shrink-0" />
              <p className="text-lg text-gray-600">No Recent Swaps Yet</p>
              <p className="text-md text-gray-600">Start by swapping your skills with others</p>
            </div>
          </div>
        </div>
      </section>


      {/* user profile  */}
      <section className="w-full my-10 ">
        <div className="flex flex-col p-5 gap-2">
          <div className="border-b-2 border-secondary pb-3">
            <h1 className="text-2xl font-bold text-gradient">Profile Summary</h1>
          </div>
          <div className="flex flex-col md:flex-row  gap-2 my-2 p-2 shrink border-4 border-secondary rounded-3xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out hover:cursor-pointer">
            <div className="flex items-start justify-center w-20">
              <CircleUser size={70} className="text-secondary bg-secondary/20 p-2 rounded-full  shrink-0" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-gradient text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="flex gap-0.5  items-center text-gray-600"> <MapPin size={25} className="text-secondary  shrink-0" /> Lahore, Pakistan</p>
            </div>

            <div className="w-full sm:w-1/4 flex items-center justify-center text-center ">
              <Link to="/profile" className="btn-gradient-outline hover:cursor-pointer w-full">Edit Profile</Link>
            </div>
          </div>

          <div className="w-full px-8 py-2 bg-primary/10 mx-auto rounded-2xl ">
            <p>{user.bio}</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Dashboard