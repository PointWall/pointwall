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
      'ACUERDO DE LICENCIA DE USUARIO FINAL (EULA) DE POINTWALL',
      'Fecha de vigencia: 20 de Agosto de 2023',
      'Este Acuerdo de Licencia de Usuario Final ("EULA") es un contrato legal entre usted, en adelante el "Usuario", y PointWall, el desarrollador de la aplicación móvil PointWall ("Nosotros" o el "Desarrollador"). Lea atentamente este EULA antes de utilizar la aplicación PointWall. Al acceder o utilizar la aplicación, usted acepta y se compromete a cumplir con los términos y condiciones establecidos en este acuerdo.'
    ]
  },
  {
    title: 'Aceptación de Términos y Condiciones',
    paragraphs: ['Al utilizar la aplicación PointWall, el Usuario reconoce haber leído, entendido y aceptado los términos y condiciones de este EULA. Si no está de acuerdo con estos términos, no debe utilizar la aplicación.']
  }, {
    title: 'Propósito y Misión de PointWall',

    paragraphs: ['PointWall es una plataforma cuyo objetivo principal es ser una galería de arte urbano líder que proporciona una plataforma para que artistas independientes exhiban su trabajo. Nuestra misión es promover y difundir murales, graffiti y arte urbano en ubicaciones específicas, permitiendo que cualquier persona comparta su pasión por este arte.']
  },
  {
    title: 'Contenido Objetable y Conducta Abusiva',
    paragraphs: [],
    lists: [
      {
        items: [
          'El Usuario reconoce y acepta que PointWall no tolera contenido objetable ni usuarios que se comporten de manera abusiva en la plataforma.',
          'El Desarrollador se reserva el derecho de determinar qué constituye contenido objetable o una conducta abusiva y tomará medidas apropiadas para abordar estos problemas.']
      }
    ]
  },

  {
    title: 'Inadmisión de Contenido Inapropiado',
    paragraphs: ['PointWall es una plataforma dedicada al arte urbano y la cultura de la calle. Cualquier contenido que sea considerado inapropiado, ofensivo, difamatorio, ilegal o que viole los derechos de propiedad intelectual no será admitido en la plataforma.']
  },
  {
    title: 'Mecanismos de Reporte y Bloqueo',
    paragraphs: [],
    lists: [
      {
        items: [
          'Los Usuarios tienen la opción de reportar contenido inapropiado a través de la plataforma.',
          'Los Usuarios pueden bloquear a otros usuarios que consideren abusivos.'
        ]
      }
    ]
  },

  {
    title: 'Acción sobre Reportes de Contenido Inapropiado',
    paragraphs: [],
    lists: [
      {
        items: [
          'El Desarrollador se compromete a actuar sobre los reportes de contenido inapropiado en un plazo de 24 horas a partir de la recepción del reporte.',
          'Las acciones pueden incluir la eliminación del contenido inapropiado y la expulsión del usuario que lo proporcionó.'
        ]
      }
    ]
  },
  {
    title: 'Uso de la Aplicación',
    paragraphs: ['El Usuario se compromete a utilizar la aplicación PointWall de manera ética y de acuerdo con todas las leyes y regulaciones aplicables.']
  },
  {
    title: 'Privacidad y Datos Personales',
    paragraphs: ['La recopilación y el uso de datos personales están sujetos a nuestra Política de Privacidad, que se encuentra disponible en la aplicación y en nuestro sitio web.']
  }, {
    title: 'Modificaciones y Actualizaciones',
    paragraphs: [

      'El Desarrollador se reserva el derecho de modificar este EULA en cualquier momento. El Usuario será notificado de dichos cambios y deberá aceptar los términos revisados para seguir utilizando la aplicación.'
    ]
  }, {
    title: 'Terminación de la Cuenta por Contenido Inapropiado',
    paragraphs: ['El Desarrollador se reserva el derecho de suspender o terminar la cuenta de cualquier Usuario que viole este EULA al subir contenido inapropiado o participar en conducta inadecuada en la plataforma.']
  },
  {
    title: 'License Grant (Concesión de Licencia)',
    paragraphs: [

      'PointWall otorga al Usuario una licencia personal, no transferible y no exclusiva para utilizar el software de PointWall en sus dispositivos de acuerdo con los términos de este acuerdo de EULA.'
    ]
  },
  {
    title: 'Account Deletion (Eliminación de Cuenta)',
    paragraphs: ['PointWall se reserva el derecho de eliminar o suspender su cuenta de usuario, en su totalidad o en parte, si tenemos motivos para creer que ha cargado o publicado contenido que consideramos inapropiado o en violación de nuestras pautas de contenido. Esto incluye, pero no se limita a, contenido que sea ofensivo, infrinja los derechos de otros o viole las leyes y regulaciones aplicables.']
  },
  {
    title: 'Content Guidelines (Directrices de Contenido)',
    paragraphs: [],
    lists: [{
      title: 'Usted acepta que no cargará, publicará ni compartirá ningún contenido dentro de la aplicación que:',
      items: [
        'Sea ilegal, perjudicial, amenazante, abusivo, acosador, difamatorio, vulgar, obsceno o de otro modo objetable.',
        'Infrinja los derechos de propiedad intelectual de otros, incluyendo derechos de autor, marcas registradas o patentes.',
        'Vulnere cualquier ley, regulación aplicable o derechos de terceros.',
        'Contenga virus, malware u otro código dañino.',
        'Promueva o participe en cualquier forma de actividad ilegal o antiética.'
      ]
    }]
  },
  {
    title: 'Propiedad Intelectual y Propiedad',
    paragraphs: [
      'PointWall retiene en todo momento la propiedad del software tal como se descargó originalmente por usted y todas las descargas posteriores del software por parte suya. El software (y los derechos de autor y otros derechos de propiedad intelectual de cualquier naturaleza en el software, incluidas las modificaciones realizadas al mismo) son y seguirán siendo propiedad de PointWall.',
      'PointWall se reserva el derecho de otorgar licencias para usar el software a terceros.'
    ]
  },

  {
    title: 'Terminación',
    paragraphs: ['Este acuerdo de EULA es efectivo a partir de la fecha en que usted utilice por primera vez el software y continuará vigente hasta su terminación. Puede terminarlo']
  }
]

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>EULA</title>
      </Head>
      <Layout color='yellow'>
        <section className='mx-auto my-8 max-w-prose'>
          <h1 className='text-4xl'>
            END-USER LICENSE AGREEMENT (&quot;EULA&quot;)
          </h1>

          {CONTENT.map((section, i) => (
            <div key={i} className='my-8'>
              {section.title !== undefined
                ? (
                  <h3 className='mb-4 text-3xl'>{section.title}</h3>
                  )
                : null}
              {section.paragraphs.map((p, i) => (
                <p key={i} className='my-2'>
                  {p}
                </p>
              ))}
              {section.lists !== undefined
                ? (
                  <div>
                    {section.lists.map((list) => (
                      <div key={list.title} className='my-4'>
                        <p>{list.title}</p>
                        <ul className='my-2 list-decimal space-y-2 pl-6'>
                          {list.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {list.footer !== undefined && (
                          <div>
                            {list.footer.map((text, i) => (
                              <p key={i} className='my-2'>
                                {text}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  )
                : null}
            </div>
          ))}
        </section>
      </Layout>
    </>
  )
}
