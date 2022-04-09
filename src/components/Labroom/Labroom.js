import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../configs/firebase';
import LoaderSkeleton from '../Preloader/LoaderSkeleton';
import ClassCard from './ClassCard';
import './Labroom.css';

const Labroom = () => {
  const [classes, setClasses] = useState([]);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    let unsubscribe;

    unsubscribe = db
      .collection('users')
      .where('email', '==', auth.user.email)
      .onSnapshot((snapshot) => {
        setClasses(snapshot?.docs[0]?.data()?.enrolledClassrooms);
      });

    return () => {
      unsubscribe();
    };
  }, [auth.user.email]);

  return (
    <div>
      {classes?.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <LoaderSkeleton />
          <LoaderSkeleton />
          <LoaderSkeleton />
        </div>
      ) : (
        <div className="dashboard__classContainer">
          {classes?.map((individualClass) => (
            <ClassCard
              creatorName={individualClass.creatorName}
              creatorPhoto={individualClass.creatorPhoto}
              name={individualClass.name}
              id={individualClass.id}
              key={individualClass.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Labroom;
