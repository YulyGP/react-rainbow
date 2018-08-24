module.exports = {
    Heading: {
        heading2: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1.25rem',
            color: '#00396b',
            fontFamily: 'inherit',
            marginBottom: '1rem',
            marginTop: '1.75rem',
        },
        heading3: {
            lineHeight: 1.25,
            fontWeight: 300,
            fontSize: '1rem',
            color: '#5876a3',
            fontFamily: 'inherit',
            marginTop: '1rem',
        },
        heading5: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.88rem',
            color: '#5876a3',
            fontFamily: 'inherit',
        },
        heading6: {
            height: '34px',
            backgroundColor: '#04132c',
            color: '#04132c',
            borderRadius: '10px 10px 0 0',
            marginTop: -25,
        },
    },
    Link: {
        link: {
            '&, &:link, &:visited': {
                fontSize: 'inherit',
                color: '#006dcc',
            },
            '&:hover, &:active': {
                isolate: false,
                color: '#005fb2',
                cursor: 'pointer',
                textDecoration: 'underline',
            },
        },
    },
    Para: {
        para: {
            marginBottom: 4,
            marginTop: 4,
        },
    },
    Text: {
        strong: {
            lineHeight: 1.5,
            fontWeight: 300,
            fontSize: '0.85rem',
            color: '#00396b',
            fontFamily: 'inherit',
        },
    },
    Code: {
        code: {
            lineHeight: 1.5,
            color: '#a2aab7',
            padding: 0,
        },
    },
    Pre: {
        pre: {
            width: '100%',
            backgroundColor: '#061c3f',
            paddingTop: '12px',
            paddingLeft: '12px',
            paddingBottom: '48px',
            borderRadius: '0 0 5px 5px',
            borderColor: '#061c3f',
            overflow: 'auto',
            marginTop: -20,
        },
    },
};