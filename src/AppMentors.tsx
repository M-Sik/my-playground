import React, { useState } from 'react';

const initPerson = {
  name: '명식',
  title: '개발자',
  mentors: [
    {
      name: 'sik1',
      title: '시니어 개발자1',
    },
    {
      name: 'sik2',
      title: '시니어 개발자2',
    },
  ],
};

export default function AppMentors() {
  const [person, setPerson] = useState(initPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꿀건가?`);
    const current = prompt(`이름을 뭐로 바꿀건가?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) =>
        mentor.name === prev ? { ...mentor, name: current } : mentor,
      ),
    }));
  };

  const handleAdd = () => {
    const newMentorName = prompt(`추가할 멘토 이름 입력`);
    const newMentorTitle = prompt(`추가할 멘토 타이틀 입력`);
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name: newMentorName, title: newMentorTitle }],
    }));
  };

  const handleDelete = () => {
    const deleteMentorName = prompt(`삭제할 멘토 이름 입력`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter(({ name }) => name !== deleteMentorName),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}
