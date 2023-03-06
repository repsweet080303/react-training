import React from 'react';
import { IUser } from '@/types/interfaces';
import Typo from '@/components/common/Typo';

const User = ({
  url,
  alt,
  name,
  job,
}: IUser) => (
  <div className="user">
    <img src={url} alt={alt} />
    <div className="user__info">
      <Typo sizeTypo="xs" statusTypo="typo__primary" tagTypo="p" weightTypo="typo__bold">{name}</Typo>
      <Typo sizeTypo="xs" statusTypo="typo__secondary" tagTypo="p" weightTypo="typo__regular">{job}</Typo>
    </div>
  </div>
);

export default User;
