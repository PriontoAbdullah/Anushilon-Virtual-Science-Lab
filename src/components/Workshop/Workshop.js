import 'moment/locale/bn-bd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../configs/firebase';
import LoaderSkeleton from '../Preloader/LoaderSkeleton';
import WorkshopCard from './WorkshopCard';
import WorkshopPost from './WorkshopPost';

const Workshop = () => {
  const { auth } = useSelector((state) => state);
  const [workshop, setWorkshop] = useState([]);
  const [classes, setClasses] = useState([]);

  // get user enrolled labroom
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

  // get notices from noticeboard
  useEffect(() => {
    let unsubscribe;

    unsubscribe = db
      .collection('workshop')
      .orderBy('date', 'desc')
      .onSnapshot((snapshot) => {
        setWorkshop(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto mb-16">
        {auth.user.role === 'teacher' && <WorkshopPost />}
        {/* Teacher workshop */}
        <section className="flex flex-wrap -m-4 mt-4">
          {workshop
            .filter((workshop) => workshop.creatorEmail === auth.user.email)
            .map((post) => (
              <WorkshopCard
                title={post.title}
                details={post.details}
                link={post.link}
                date={post.date}
                time={post.time}
                imgUrl={post.imgUrl}
                createAt={post.createAt}
                key={post.uid}
              />
            ))}
        </section>
      </div>

      <section className="flex flex-wrap -m-4 -mt-16">
        <>
          {workshop.length === 0 ? (
            <div className="w-full flex justify-center items-center">
              <LoaderSkeleton />
            </div>
          ) : (
            <>
              {/* get user enrolled labroom teachers notices */}
              {workshop
                .filter((workshop) =>
                  classes.some(
                    (classroom) =>
                      classroom.creatorEmail === workshop.creatorEmail
                  )
                )
                .map((post) => (
                  <WorkshopCard
                    title={post.title}
                    details={post.details}
                    link={post.link}
                    date={post.date}
                    time={post.time}
                    imgUrl={post.imgUrl}
                    createAt={post.createAt}
                    key={post.uid}
                  />
                ))}
            </>
          )}
        </>
      </section>
    </section>
  );
};

export default Workshop;
