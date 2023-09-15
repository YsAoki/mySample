import React, { useEffect } from 'react';
import { StyleTalkArea } from './style';
import GreyObjectWithTitle from '../../02molecules/GreyObjectWithTitle';
import TalkCard from '../../02molecules/TalkCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTalkData } from '../../../store/getFirestoreTalkSlice';
import { RootState } from '../../../store/store';

const TalkArea = () => {
  const dispatch = useDispatch();
  const talkData = useSelector((state:RootState) => state.getFirestoreTalk);

  useEffect(() => {
    dispatch(fetchTalkData() as any);
  }, [talkData]);

  const sortedTalkData = Array.from(talkData).sort((a, b) => parseInt(b.forDataTime) - parseInt(a.forDataTime));

  return (
    <StyleTalkArea>
      <GreyObjectWithTitle>投稿を見る</GreyObjectWithTitle>
      {sortedTalkData.map((data) => (
        <TalkCard
          key={data.forDataTime}  
          displayName={data.displayName}
          viewTime={data.viewTime}
          uid={data.uid}
          message={data.message}
          photoUrl={data.photoUrl}
          upDateFileUrl={data.updateFileUrl}
          time={data.forDataTime}
        />
      ))}
    </StyleTalkArea>
  );
};

export default TalkArea;