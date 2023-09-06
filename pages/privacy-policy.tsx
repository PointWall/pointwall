import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'

interface IContent {
  title?: string
  paragraphs: string[]
  list?: string[]
}

const CONTENT: IContent[] = [
  {
    paragraphs: [
      'At PointWall, accessible from pointwall.com.ar, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PointWall and how we use it.',
      'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.',
      'This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in PointWall. This policy is not applicable to any information collected offline or via channels other than this website.'
    ]
  },
  {
    title: 'Consentimiento',
    paragraphs: [
      'By using our website, you hereby consent to our Privacy Policy and agree to its terms.'
    ]
  },
  {
    title: 'Información que recopilamos',
    paragraphs: [
      'The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.',
      'If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.',
      'When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.'
    ]
  },
  {
    title: 'Cómo utilizamos tu información',
    paragraphs: [
      'We use the information we collect in various ways, including to:'
    ],
    list: [
      'Provide, operate, and maintain our website',
      'Improve, personalize, and expand our website',
      'Understand and analyze how you use our website',
      'Develop new products, services, features, and functionality',
      'Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes',
      'Send you emails',
      'Find and prevent fraud'
    ]
  },
  {
    title: 'Log files',
    paragraphs: [
      'PointWall follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services\' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users\' movement on the website, and gathering demographic information.'
    ]
  },
  {
    title: 'Advertising Partners Privacy Policies',
    paragraphs: [
      'You may consult this list to find the Privacy Policy for each of the advertising partners of PointWall.',
      'Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on PointWall, which are sent directly to users\' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.',
      'Note that PointWall has no access to or control over these cookies that are used by third-party advertisers.'
    ]
  },
  {
    title: 'Third Party Privacy Policies',
    paragraphs: [
      'PointWall\'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.',
      'You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers\' respective websites.'
    ]
  },
  {
    title: 'GDPR Data Protection Rights',
    paragraphs: [
      'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:'
    ],
    list: [
      'The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.',
      'The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.',
      'The right to erasure – You have the right to request that we erase your personal data, under certain conditions.',
      'The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.',
      'The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.',
      'The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.',
      'If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.'
    ]
  },
  {
    title: 'Children\'s Information',
    paragraphs: [
      'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.',
      'PointWall does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.'
    ]
  }
]

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Layout color='yellow'>
        <section className='max-w-prose mx-auto'>
          <h1 className='text-4xl'>Política de Privacidad PointWall</h1>
          {CONTENT.map((section, i) => (
            <div key={i} className='my-8'>
              {section.title !== undefined ? <h3 className='text-3xl mb-4'>{section.title}</h3> : null}
              {section.paragraphs.map((p, i) => (
                <p key={i}>
                  {p}
                </p>
              )
              )}
              {section.list !== undefined ? <ul className='mt-2 pl-6 space-y-2 list-decimal'>{section.list.map((item, i) => (<li key={i} className=''>{item}</li>))}</ul> : null}
            </div>
          ))}

          <h2 className='text-3xl'>Cambios en la política de privacidad</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
          </p>

          <p>
            Nuestra Política de Privacidad fue creada con la ayuda de{' '}
            <Link target='_blank' href='https://www.privacypolicygenerator.info' rel='noreferrer' className='text-blue-700 underline'>
              Privacy Policy Generator
            </Link>
            .
          </p>

          <br />
          <h2 className='text-3xl'>Contact Us</h2>

          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
        </section>
      </Layout>
    </>
  )
}
