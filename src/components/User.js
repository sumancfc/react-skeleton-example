import React, { useEffect, useState } from "react";
import SkeletonProfile from "./skeleton/SkeletonProfile";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className='user'>
      <h2>User Details</h2>

      {profile && (
        <div className='user__profile'>
          <h4>{profile.username}</h4>
          <p>{profile.email}</p>
        </div>
      )}

      {!profile && <SkeletonProfile theme='light' />}
    </div>
  );
};

export default User;
