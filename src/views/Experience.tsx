import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import tw from 'twin.macro';

import experienceData from '../../experiences.json';
import ExperienceItem from '../components/ExperienceItem';
import ExperienceSkeleton from '../components/ExperienceSkeleton';
import useHandling from '../hooks/use-handling';
import ExperienceModel from '../models/ExperienceModel';

const Wrapper = tw.main`mx-auto w-full max-w-screen-lg px-8 py-12`;

const Title = tw.h2`text-2xl text-slate-700`;

const List = tw.div`mt-8 grid grid-cols-1 lg:grid-cols-2 gap-2`;

export default function Experiences() {
  const { t } = useTranslation();
  const [experiences, setExperiences] = useState<ExperienceModel[]>([]);

  const [loadingExperiences, loadExperiences] = useHandling(
    useCallback(async () => {
      const loadedExperiences = experienceData.map((exp: any) => ExperienceModel.from(exp));
      setExperiences(loadedExperiences);
    }, []),
    true,
  );

  useEffect(() => {
    setTimeout(() => {
      loadExperiences();
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Title>{t('experiences.title')}</Title>

      {loadingExperiences && (
        <List>
          {Array.from({ length: 5 }).map((_, i) => (
            <ExperienceSkeleton key={i} />
          ))}
        </List>
      )}

      {!!experiences.length && (
        <List>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </List>
      )}
    </Wrapper>
  );
}
