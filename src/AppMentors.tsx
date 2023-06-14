import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
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
  });

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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꿀건가?`);
          const current = prompt(`이름을 뭐로 바꿀건가?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) =>
              mentor.name === prev ? { ...mentor, name: current } : mentor,
            ),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
