import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {motion, AnimatePresence} from 'framer-motion'
import NextNProgress from 'nextjs-progressbar';
import { Fragment } from 'react';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <NextNProgress color="#29AB87" height={6} />
        <Layout>
          <AnimatePresence mode='wait'>
            <motion.div key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
                <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
    </Fragment>
  )
}
