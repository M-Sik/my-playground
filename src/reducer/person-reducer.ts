export function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === prev ? { ...mentor, name: current } : mentor,
        ),
      };
    }
    case 'added': {
      const { newMentorName, newMentorTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: newMentorName, title: newMentorTitle }],
      };
    }
    case 'deleted': {
      const { deleteMentorName } = action;
      return {
        ...person,
        mentors: person.mentors.filter(({ name }) => name !== deleteMentorName),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
