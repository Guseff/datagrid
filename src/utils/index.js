import faker from 'faker'
import { UP_ARROW, DOWN_ARROW, TWO_ARROWS, DAYS } from '../constants'

faker.seed(123)

const makeFakeString = x => {
  return {
    id: x + 1,
    rank: faker.random.number(19) + 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: {
      city: faker.address.city(),
      street: faker.address.streetAddress(),
    },
    day: DAYS[faker.random.number(6)],
    isActive: faker.random.boolean(),
  }
}

export const makeData = () =>
  [...new Array(1500)].map((_, index) => makeFakeString(index))

export const getArrow = rank => {
  if (!rank) return TWO_ARROWS
  if (rank === 'inc') return UP_ARROW
  return DOWN_ARROW
}

export const deleteElementFromArray = (arr, el, newEl = undefined) => {
  if (!arr.includes(el)) return [...arr]
  const res = [...arr]
  if (newEl) {
    res.splice(res.indexOf(el), 1, newEl)
  } else {
    res.splice(res.indexOf(el), 1)
  }
  return res
}

export const deleteElementFromArrayByID = (array, IDs) => {
  let res = [...array]
  IDs.forEach(id => {
    const elem = res.find(x => x.id.toString() === id)
    res = deleteElementFromArray(res, elem)
  })
  return res
}

export const sortElements = (elements, params) => {
  const sortFunction = (a, b, i) => {
    const key = Object.keys(params[i])[0]
    if (key === 'day') {
      return params[i][key] === 'inc'
        ? a[key].order - b[key].order
        : b[key].order - a[key].order
    }
    if (key === 'rank') {
      return params[i][key] === 'inc' ? a[key] - b[key] : b[key] - a[key]
    }
    if (key === 'name') {
      return params[i][key] === 'inc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key])
    }
    return 0
  }

  return [...elements].sort((a, b) => {
    let index = 0
    while (index < params.length) {
      const res = sortFunction(a, b, index)
      if (res !== 0) return res
      index += 1
    }
    return 0
  })
}

export const saveCSV = data => {
  const csvFile = `#,Rank,Name,E-mail,Avatar,Day,Active,Address\n${data
    .map(
      el =>
        `${el.id},${el.rank},${el.name},${el.email},${el.avatar},${
          el.day.label
        },${el.isActive ? 'Yes' : 'No'},${el.address.city} ${el.address.street}`
    )
    .join('\n')}`
  const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', 'test.csv')
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const filtersAllow = ['filterIfActive', 'filterByText', 'filterByDays']

// string example: ?filterIfActive=true&filterByText=Ac&filterByDays=mon,sat
const getFilterFromQuerystring = string => {
  if (!string) return undefined
  const resArray = string
    .slice(1)
    .split('&')
    .map(arr => arr.split('='))
    .filter(arr => filtersAllow.includes(arr[0]))
  const res = Object.fromEntries(resArray)
  res.filterIfActive = res.filterIfActive === 'true'
  return res
}

export const getInitialState = () => {
  return {
    vrt: { offset: 0, virtualize: true, scrollX: 0 },
    data: { main: makeData(), marked: [] },
    filter: getFilterFromQuerystring(window.location.search) ||
      JSON.parse(localStorage.getItem('filter')) || {
        filterIfActive: false,
        filterByText: '',
        filterByDays: '',
      },
    sort: JSON.parse(localStorage.getItem('sort')) || [],
    show: JSON.parse(localStorage.getItem('show')) || {
      rank: true,
      name: true,
      mail: true,
      avatar: true,
      address: true,
      active: true,
      day: true,
    },
  }
}

export const makeQueryString = (active, search, days) => {
  const arr = [
    active ? `filterIfActive=${active}&` : '',
    search ? `filterByText=${search}&` : '',
    days ? `filterByDays=${days}&` : '',
  ].join('')
  return arr.length > 0 ? `${arr.slice(0, -1)}` : ''
}
