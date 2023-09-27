import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'

interface IList {
  title?: string
  items: string[]
  footer?: string[]
}

interface IContent {
  title?: string
  paragraphs: string[]
  lists?: IList[]
}

const CONTENT: IContent[] = [
  {
    paragraphs: [
      'This End-User License Agreement ("EULA") is a legal agreement between you and PointWall. Our EULA was created by EULA Template for PointWall.',
      'This EULA agreement governs your acquisition and use of our PointWall software ("Software") directly from PointWall or indirectly through a PointWall authorized reseller or distributor (a "Reseller").',
      'Please read this EULA agreement carefully before completing the installation process and using the PointWall software. It provides a license to use the PointWall software and contains warranty information and liability disclaimers.',
      'If you register for a free trial of the PointWall software, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the PointWall software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement.',
      'If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement.',
      'This EULA agreement shall apply only to the Software supplied by PointWall herewith regardless of whether other software is referred to or described herein. The terms also apply to any PointWall updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply.'
    ]
  },
  {
    title: 'License Grant',
    paragraphs: [
      'PointWall hereby grants you a personal, non-transferable, non-exclusive licence to use the PointWall software on your devices in accordance with the terms of this EULA agreement.',
      'You are permitted to load the PointWall software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the PointWall software.'
    ],
    lists: [
      {
        title: 'You are not permitted to:',
        items: [
          'Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things',
          'Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose',
          'Allow any third party to use the Software on behalf of or for the benefit of any third party',
          'Use the Software in any way which breaches any applicable local, national or international law',
          'use the Software for any purpose that PointWall considers is a breach of this EULA agreement'
        ]
      }
    ]
  },
  {
    title: 'Account Deletion',
    paragraphs: [
      'PointWall reserves the right to delete or suspend your user account, in part or in whole, if we have reason to believe that you have uploaded or posted content that we consider to be inappropriate or in violation of our content guidelines. This includes, but is not limited to, content that is offensive, infringes on the rights of others, or violates applicable laws and regulations.'
    ]
  },
  {
    title: 'Content Guidelines',
    paragraphs: [
      'You agree that you will not upload, post, or share any content within the App that:'
    ],
    lists: [
      {
        items: [
          'Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.',
          'Infringes on any intellectual property rights of others, including copyrights, trademarks, or patents.',
          'Violates any applicable laws, regulations, or third-party rights.',
          'Contains viruses, malware, or any other harmful code.',
          'Promotes or engages in any form of illegal or unethical activity.'
        ]
      }
    ]
  },
  {
    title: 'Intellectual Property and Ownership',
    paragraphs: [
      'PointWall shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of PointWall.',
      'PointWall reserves the right to grant licences to use the Software to third parties.'
    ]
  },
  {
    title: 'Termination',
    paragraphs: [
      'This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to PointWall.',
      'It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement.'
    ]
  },
  {
    title: 'Governing Law',
    paragraphs: [
      'This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of ar.'
    ]
  }
]

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>EULA</title>
      </Head>
      <Layout color='yellow'>
        <section className='max-w-prose mx-auto my-8'>
          <h1 className='text-4xl'>
            END-USER LICENSE AGREEMENT (&quot;EULA&quot;)
          </h1>

          {CONTENT.map((section, i) => (
            <div key={i} className='my-8'>
              {section.title !== undefined ? <h3 className='text-3xl mb-4'>{section.title}</h3> : null}
              {section.paragraphs.map((p, i) => (
                <p key={i} className='my-2'>
                  {p}
                </p>
              )
              )}
              {section.lists !== undefined
                ? (
                  <div>
                    {section.lists.map((list) => (
                      <div key={list.title} className='my-4'>
                        <p>{list.title}</p>
                        <ul className='my-2 list-decimal pl-6 space-y-2'>
                          {list.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {list.footer !== undefined && <div>{list.footer.map((text, i) => <p key={i} className='my-2'>{text}</p>)}</div>}
                      </div>))}
                  </div>
                  )
                : null}
            </div>
          ))}

          <p>
            El presente Acuerdo entrará en vigor en la fecha del mismo. Nuestra Licencia de Acuerdo con el Usurio Final fue creada con la ayuda de
            {' '}
            <Link target='_blank' href='https://www.eulatemplate.com/' rel='noreferrer' className='text-blue-700 underline'>
              Eula Template Generator
            </Link>
            .
          </p>

        </section>
      </Layout>
    </>
  )
}
