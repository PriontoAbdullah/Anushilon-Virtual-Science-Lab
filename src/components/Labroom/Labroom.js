import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../configs/firebase';
import ClassCard from './ClassCard';
import './Labroom.css';

const Labroom = () => {
  const [classes, setClasses] = useState([]);
  const { auth } = useSelector((state) => state);

  const fetchClasses = async () => {
    try {
      await db
        .collection('users')
        .where('email', '==', auth.user.email)
        .onSnapshot((snapshot) => {
          setClasses(snapshot?.docs[0]?.data()?.enrolledClassrooms);
        });
      // 👇🏻 below code doesn't update realtime, so updated to snapshot listener
      // const userData = querySnapshot.docs[0].data();
      // setClasses(userData.enrolledClassrooms);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {classes?.length === 0 ? (
        <div class="bg-white p-2 mx-32 mt-4 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
          <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse"></div>
          <div class="flex flex-col flex-1 gap-5 sm:p-2">
            <div class="flex flex-1 flex-col gap-3">
              <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl"></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
              <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            </div>
            <div class="mt-auto flex gap-3">
              <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
              <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
              <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="dashboard__classContainer">
          {classes?.map((individualClass) => (
            <ClassCard
              creatorName={individualClass.creatorName}
              creatorPhoto={individualClass.creatorPhoto}
              name={individualClass.name}
              id={individualClass.id}
              style={{ marginRight: 30, marginBottom: 30 }}
              key={individualClass.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Labroom;
