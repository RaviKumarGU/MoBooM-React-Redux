import { Link } from "react-router-dom";

function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="mb-10">
        &larr; Back to menu
      </Link>
      <h1 className="my-4 text-3xl font-bold">My Account</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-md border p-4">
          <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Your Email"
            />
          </div>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Update Information
          </button>
        </div>
        <div className="rounded-md border p-4">
          <h2 className="mb-4 text-xl font-semibold">Change Password</h2>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="mb-2 block text-sm font-medium"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Current Password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="mb-2 block text-sm font-medium"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full rounded-md border px-4 py-2"
              placeholder="New Password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full rounded-md border px-4 py-2"
              placeholder="Confirm Password"
            />
          </div>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
