import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            '300': '#E8E8E8',
            '200': '#B3B5C6',
            '100': '#D1D2DC',
            '50': '#F5F5F5',
        },

        green: {
            '100': '#E9F4F5',
            '400': '#4CA7A8'
        },

        darkBlue: {
            '800': '#0F1527'
        },

        orange: {
            '500': '#EA7551',
            '50': '#FDEDE9'
        },

        white: {
            '50': '#E8E8E8',
            '100': '#FAFAFA',
            '200': '#AEAEAE'
        }

    },
    fonts: {
        heading: 'DM Sans',
        body: 'DM Sans'
    },
    styles: {
        global: {
            body: {
                bg: '#FFFFFF',
                color: 'darkBlue.800'
            }
        }
    }
})