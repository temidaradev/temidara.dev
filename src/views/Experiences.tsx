import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

const Wrapper = tw.main`mx-auto w-full max-w-screen-lg px-8 py-12`;

const Title = tw.h2`text-2xl text-slate-700`;

const List = tw.div`mt-8 grid grid-cols-1 lg:grid-cols-2 gap-2`;

const ExpComp = tw.div`flex gap-3 p-3 border border-white rounded-sm`;

interface Experience {
  language: String;
  yoe: number;
}

const technologies: Experience[] = [
  {
    language: 'Docker',
    yoe: 2,
  },
  {
    language: 'PHP',
    yoe: 2,
  },
  {
    language: 'MYSQL',
    yoe: 2,
  },
];

const LangExperience = ({ language, yoe }: Experience) => {
  return (
    <ExpComp>
      <h1 className="font-bold text-lg">{language}: </h1>
      <span className="text-sm opacity-75">
        {yoe} {yoe > 1 ? 'years' : 'year'}{' '}
      </span>{' '}
    </ExpComp>
  );
};

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('experiences.title')}</Title>
      <List>
        <div>
          <h1 className="font-bold text-2xl mb-3">Technologies</h1>
          <div className="flex flex-wrap gap-3">
            {technologies?.map((tech, i) => (
              <LangExperience {...tech} key={i} />
            ))}
          </div>
        </div>
      </List>

      {/* <div>
        <h2>Tools</h2>
        <p>Git</p>
      </div>

      <div>
        <h1>Languages</h1>
      </div>
      <div>
        <h1>Frontend Frameworks</h1>
      </div>
      <div>
        <h1>Backend Frameworks</h1>
      </div>
      <div>
        <h1>Libraries</h1>
      </div>
      <div>
        <h1>Databases</h1>
      </div> */}
    </Wrapper>
  );
}
