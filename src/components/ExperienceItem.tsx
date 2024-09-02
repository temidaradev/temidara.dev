import React from 'react';
import tw, { styled } from 'twin.macro';

import ExperienceModel from '../models/ExperienceModel';

const Wrapper = tw.div`
  relative p-0 pl-0
  bg-white dark:bg-gray-900 rounded-md ring-1 ring-slate-600/5 shadow-sm hover:shadow-lg
  transition-all duration-300
`;

// const Icon = styled.div`
//   ${tw`
//     absolute top-3 left-3 w-9 h-9 rounded-md
//     flex items-center justify-center overflow-hidden font-bold
//   `}

//   &::before {
//     ${tw`absolute top-0 left-0 block [content:''] w-full h-full opacity-20`}
//     background-color: currentColor;
//   }
// `;

const Title = tw.a`block text-blue-500 truncate`;

const Description = styled.div`
  ${tw`mt-2 text-slate-400 text-sm overflow-hidden`}

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const CountList = tw.ul`mt-2 space-x-3 flex min-w-0 text-sm text-slate-400 leading-5`;

const CountItem = tw.li`flex items-center`;

const Company = tw.div`text-slate-400 font-bold`;

const Location = tw.span`text-slate-400 text-xs`;

export type ExperienceItemProps = {
  experience: ExperienceModel;
};

export default function ExperienceItem(props: ExperienceItemProps) {
  const { experience } = props;

  return (
    <Wrapper>
      {/* <Icon>
        <span>{experience?.companyName.charAt(0)}</span>
      </Icon> */}
      <Company>
        {experience?.companyName} <Location className="text-slate-400">{experience.hl}</Location>
      </Company>
    </Wrapper>
  );
}
