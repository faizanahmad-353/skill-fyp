import { Calendar, MapPin, Star, User } from 'lucide-react';
import { useState } from 'react';

type User = {
  firstName: string;
  lastName: string;
  from: string;
  wantToLearn: string[];
  wantToTeach: string[];
}

const user: User = {
  firstName: "Fazii",
  lastName: "ahmad",
  from: "New York, PAK",
  wantToLearn: ["Node.js", "Next.js", "Api creation"],
  wantToTeach: ["React", "Tailwind"]
}

type swapData = {
  totalSwaps: number;
  completedSwaps: number;
  pendingSwaps: number;
  rating: number;
}

const swapData: swapData = {
  totalSwaps: 12,
  completedSwaps: 10,
  pendingSwaps: 2,
  rating: 4.9
}

type Availability = {
  isAvailable: boolean;
  availableDays: string[];
  availableTime: {
    fromTime: string;
    toTime: string;
  };
}

const availability: Availability = {
  isAvailable: true,
  availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  availableTime: {
    fromTime: "03:00",
    toTime: "05:00"
  }
}

export default function Profile() {
  const [currentUser, setCurrentUser] = useState<User>(user)
  const [editProfile, setEditProfile] = useState(false);
  const [currentAvailability, setCurrentAvailability] = useState<Availability>(availability)
  const [editAvailability, setEditAvailability] = useState(false);

  // Profile toggle
  const handleProfileEdit = () => {
    setEditProfile(!editProfile);
  }

  // user edit handler
  const handleUserEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentUser((prev) => ({
      ...prev,
      [name]: name === "wantToLearn" || name === "wantToTeach"
        ? value.split(",").map((s) => s.trim())
        : value,
    }));
  };

  // availability handler
  const handleAvailabilityEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCurrentAvailability((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked
        : name === "availableDays" ? value.split(",").map((d) => d.trim())
          : name === "fromTime" || name === "toTime"
            ? { ...prev.availableTime, [name]: value }
            : value,
    }));
  };

  // Save availability
  const handleAvailabilitySave = () => {
    setCurrentAvailability(currentAvailability);
    setEditAvailability(false);
  };

  // Save profile
  const handleProfileSave = () => {
    setCurrentUser(currentUser);
    setEditProfile(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-8 bg-secondary/10 rounded-4xl mx-auto mt-4 mb-10 border-b-2 border-secondary shadow-2xl">
        <h1 className="text-gradient text-3xl font-bold underline decoration-4 underline-offset-10 decoration-secondary">
          Profile
        </h1>
        <p className="text-gray-500 font-semibold text-lg">
          Here you can <span className="text-gradient">Manage Your Profile Skills & Availability</span>
        </p>
      </div>

      {/* Profile Card */}
      <div className="w-full p-10 mx-auto">
        <div className="rounded-xl border-2 border-secondary shadow-2xl p-10">

          {/* Header Image Section */}
          <div className='flex flex-col gap-4 md:flex-row items-center md:gap-2 py-4'>
            <div>
              <User className='text-blue-600 bg-blue-50 p-4 w-20 h-20 rounded-full' />
            </div>
            <div className='flex flex-col justify-center items-start gap-2 flex-1'>
              <h1 className='text-gradient font-bold text-3xl'>{currentUser.firstName} {currentUser.lastName}</h1>
              <p className='text-secondary font-semibold text-md flex items-center gap-2'>
                <MapPin className='text-secondary w-6 h-6' />{currentUser.from}
              </p>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <button onClick={handleProfileEdit} className='btn-gradient font-semibold text-lg cursor-pointer hover:scale-105'>
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">{swapData.totalSwaps}</div>
              <div className="text-sm text-gray-600 font-medium">Total Swaps</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">{swapData.completedSwaps}</div>
              <div className="text-sm text-gray-600 font-medium">Completed</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-1">{swapData.pendingSwaps}</div>
              <div className="text-sm text-gray-600 font-medium">Pending</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-gray-200 text-center">
              <div className='flex justify-center items-center py-2'>
                {[...Array(Math.round(swapData.rating))].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-7 h-7 ${index < swapData.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">{swapData.rating} Rating</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Want to Teach */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4 bg-linear-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Want to Teach</span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {currentUser?.wantToTeach?.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
                {(!currentUser?.wantToTeach || currentUser?.wantToTeach?.length === 0) && (
                  <p className="text-gray-500 text-center py-4">No skills listed</p>
                )}
              </div>
            </div>

            {/* Want to Learn */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="p-4 bg-linear-to-r from-green-50 to-emerald-50 border-b border-green-200">
                <h3 className="text-lg font-bold text-green-900 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  <span>Want to Learn</span>
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {currentUser?.wantToLearn?.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
                {(!currentUser?.wantToLearn || currentUser?.wantToLearn?.length === 0) && (
                  <p className="text-gray-500 text-center py-4">No skills listed</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="p-6 sm:p-8 bg-secondary/5 border-2 border-secondary rounded-2xl my-8 shadow-2xl">
          <h2 className='text-gradient font-bold text-3xl mb-4'>Availability</h2>
          <div className="flex items-center space-x-3 text-gray-600">
            <span className={`w-3 h-3 rounded-full ${currentAvailability.isAvailable ? "bg-green-500" : "bg-red-500"}`}></span>
            <span>{currentAvailability.isAvailable ? "Available" : "Not Available"}</span>
            <Calendar className="w-5 h-5" />
            <span>{currentAvailability.availableDays.join(", ")}</span>
            <span>{currentAvailability.availableTime.fromTime} - {currentAvailability.availableTime.toTime}</span>
          </div>

          <button
            onClick={() => setEditAvailability(!editAvailability)}
            className='btn-gradient font-semibold text-lg mt-4 cursor-pointer hover:scale-102'
          >
            Edit Availability
          </button>

          {editAvailability && (
            <div className='flex flex-col gap-3 mt-4 border-2 border-secondary p-4 rounded-lg'>
              <label className='flex items-center gap-2 text-lg font-semibold text-gradient'>
                <input
                  type="checkbox"
                  name="isAvailable"
                  checked={currentAvailability.isAvailable}
                  onChange={handleAvailabilityEdit}
                />
                Available
              </label>

              <label className='text-lg font-semibold text-gradient'>Available Days (comma separated)</label>
              <input
                type="text"
                name="availableDays"
                value={currentAvailability.availableDays.join(", ")}
                onChange={handleAvailabilityEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <label className='text-lg font-semibold text-gradient'>From Time</label>
              <input
                type="time"
                name="fromTime"
                value={currentAvailability.availableTime.fromTime}
                onChange={handleAvailabilityEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <label className='text-lg font-semibold text-gradient'>To Time</label>
              <input
                type="time"
                name="toTime"
                value={currentAvailability.availableTime.toTime}
                onChange={handleAvailabilityEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <button onClick={handleAvailabilitySave} className='btn-gradient font-semibold text-lg cursor-pointer hover:scale-102'>
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Edit Profile Form */}
        {editProfile && (
          <div className='flex items-center justify-center my-8'>
            <div className='bg-secondary/5 p-6 rounded-lg shadow-2xl border-2 border-secondary w-full'>
              <h2 className='text-gradient font-bold text-3xl mb-4'>Edit Profile</h2>

              <label className='text-lg font-semibold text-gradient'>First Name</label>
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={currentUser.firstName}
                onChange={handleUserEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <label className='text-lg font-semibold text-gradient'>Last Name</label>
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={currentUser.lastName}
                onChange={handleUserEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <label className='text-lg font-semibold text-gradient'>From</label>
              <input
                type='text'
                placeholder='From'
                name='from'
                value={currentUser.from}
                onChange={handleUserEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <label className='text-lg font-semibold text-gradient'>Want to Learn (more than one skill separated by commas)</label>
              <input
                type='text'
                placeholder='Want to Learn'
                name='wantToLearn'
                value={currentUser.wantToLearn.join(", ")}
                onChange={handleUserEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <label className='text-lg font-semibold text-gradient'>Want to Teach (more than one skill separated by commas)</label>
              <input
                type='text'
                placeholder='Want to Teach'
                name='wantToTeach'
                value={currentUser.wantToTeach.join(", ")}
                onChange={handleUserEdit}
                className='border-2 border-secondary rounded-2xl px-3 py-2 mb-2 w-full'
              />

              <button onClick={handleProfileSave} className='btn-gradient font-semibold text-lg w-full cursor-pointer hover:scale-102'>
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}