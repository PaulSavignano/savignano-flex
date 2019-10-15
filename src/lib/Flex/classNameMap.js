const classNameMap = {
  alignItems: {
    center: 'align-items-center',
    'flex-start': 'align-items-flex-start',
    'flex-end': 'align-items-flex-end',
  },
  alignSelf: {
    stretch: 'align-self-stretch',
    center: 'align-self-center',
    start: 'align-self-start',
    end: 'align-self-end',
    'flex-start': 'align-self-flex-start',
    'flex-end': 'align-self-flex-end',
  },
  flex: {
    '0 0 100px': 'flex-0-0-100px',
    '0 0 200px': 'flex-0-0-200px',
    '0 0 300px': 'flex-0-0-300px',
    '0 0 auto': 'flex-0-0-auto',
    '0 1 100px': 'flex-0-1-100px',
    '1 1 auto': 'flex-1-1-auto',
    '2 2 auto': 'flex-2-2-auto',
    '3 3 auto': 'flex-3-3-auto',
  },
  flexFlow: {
    'column wrap': 'flex-flow-column-wrap-reverse',
    'row wrap': 'flex-flow-row-wrap',
    'row wrap-reverse': 'flex-flow-row-wrap-reverse',
    column: 'flex-flow-column',
    row: 'flex-flow-row',
  },
  justifyContent: {
    center: 'justify-content-center',
    'flex-start': 'justify-content-flex-start',
    'flex-end': 'justify-content-flex-end',
    'space-around': 'justify-content-space-around',
    'space-between': 'justify-content-space-between',
  },
  justifySelf: {
    stretch: 'justify-self-stretch',
    center: 'justify-self-center',
    start: 'justify-self-start',
    end: 'justify-self-end',
    'flex-start': 'justify-self-flex-start',
    'flex-end': 'justify-self-flex-end',
  },
  padding: {
    0: 'padding-0px',
    4: 'padding-4px',
    8: 'padding-8px',
    16: 'padding-16px',
  },
  margin: {
    '-4': 'margin--4px',
    0: 'margin-0px',
    4: 'margin-4px',
    8: 'margin-8px',
    16: 'margin-16px',
  },
}

export default classNameMap
