const news = [{
    id: 1,
    title: 'Новость 1',
    description: 'краткое описание новости 1',
    body: 'полный текст новости 1',
    created_at: '08.09.2020'
  },
  {
    id: 2,
    title: 'Новость 2',
    description: 'краткое описание новости 2',
    body: 'полный текст новости 2',
    created_at: '09.09.2020'
  },
  {
    id: 3,
    title: 'Новость 3',
    description: 'краткое описание новости 3',
    body: 'полный текст новости 3',
    created_at: '10.09.2020'
  },
]

export function getAll() {
  return news
}

export function getOne(id) {
  if (id === undefined) throw new Error('id is undefined');
  id = parseInt(id);
  if (isNaN(id)) throw Error('id is nan')
  const el = news.find(el => el.id === id);
  if (el === -1) return null;
  return el;
}
