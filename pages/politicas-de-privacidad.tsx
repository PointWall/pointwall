import Head from 'next/head'
import Layout from '@/components/Layout'

interface IContent {
  title?: string
  paragraphs: string[]
  list?: string[]
}

const CONTENT: IContent[] = [
  {
    paragraphs: [
      'En PointWall, accesible desde pointwall.com.ar, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que es recopilada y registrada por PointWall y cómo la utilizamos.',
      'Si tiene más preguntas o necesita más información sobre nuestra Política de Privacidad, no dude en ponerse en contacto con nosotros.',
      'Esta política de privacidad se aplica únicamente a nuestras actividades en línea y es válida para los visitantes de nuestro sitio web con respecto a la información que compartieron y/o recopilan en PointWall. Esta política no es aplicable a ninguna información recopilada fuera de línea o a través de canales distintos de este sitio web.'
    ]
  },
  {
    title: 'Consentimiento',
    paragraphs: [
      'Al utilizar nuestro sitio web, usted acepta nuestra Política de privacidad y está de acuerdo con sus términos.'
    ]
  },
  {
    title: 'Información que recopilamos',
    paragraphs: [
      'La información personal que se le pide y las razones por las que se le pide se le explicarán claramente en el momento en que le pidamos que proporcione su información personal.',
      'Si se pone en contacto con nosotros directamente, podemos recibir información adicional sobre usted, como su nombre, dirección de correo electrónico, número de teléfono, el contenido del mensaje y/o los archivos adjuntos que nos envíe y cualquier otra información que decida facilitarnos.',
      'Cuando se registra para obtener una Cuenta, podemos pedirle su información de contacto, incluidos datos como el nombre, el nombre de la empresa, la dirección, la dirección de correo electrónico y el número de teléfono.'
    ]
  },
  {
    title: 'Cómo utilizamos tu información',
    paragraphs: [
      'Utilizamos la información que recopilamos de varias formas, entre ellas para:'
    ],
    list: [
      'Proporcionar, operar y mantener nuestro sitio web',
      'Mejorar, personalizar y ampliar nuestro sitio web',
      'Entender y analizar como utiliza nuestro sitio web',
      'Desarrollar nuevos productos, servicios, características y funcionalidades',
      'Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios, por ejemplo con fines de atención al cliente, para proporcionarle actualizaciones y otra información relacionada con el sitio web, y con fines promocionales y de marketing.',
      'Enviarle emails',
      'Encontrar y prevenir fraude'
    ]
  },
  {
    title: 'Archivos de registro',
    paragraphs: [
      'PointWall sigue un procedimiento estándar de utilización de archivos de registro. Estos archivos registran a los visitantes cuando visitan los sitios web. Todas las empresas de alojamiento lo hacen y forman parte de los análisis de los servicios de alojamiento. La información recogida por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), fecha y hora, páginas de referencia/salida y, posiblemente, el número de clics. Estos datos no están vinculados a ninguna información que permita la identificación personal. El propósito de la información es analizar tendencias, administrar el sitio, rastrear los movimientos de los usuarios en el sitio web y recopilar información demográfica.'
    ]
  },
  {
    title: 'Socios Publicitarios',
    paragraphs: [
      'Puede consultar esta lista para encontrar la Política de Privacidad de cada uno de los socios publicitarios de PointWall.',
      'Los servidores de anuncios de terceros o redes publicitarias utilizan tecnologías como cookies, JavaScript o Web Beacons que se utilizan en sus respectivos anuncios y enlaces que aparecen en PointWall, que se envían directamente al navegador de los usuarios. Cuando esto ocurre, reciben automáticamente su dirección IP. Estas tecnologías se utilizan para medir la eficacia de sus campañas publicitarias y/o para personalizar el contenido publicitario que usted ve en los sitios web que visita.',
      'Tenga en cuenta que PointWall no tiene acceso ni control sobre estas cookies que son utilizadas por los anunciantes de terceros.'
    ]
  },
  {
    title: 'Políticas de privacidad de terceros',
    paragraphs: [
      'La Política de Privacidad de PointWall no se aplica a otros anunciantes o sitios web. Por lo tanto, le aconsejamos que consulte las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo optar por determinadas opciones.',
      'Puede optar por desactivar las cookies a través de las opciones individuales de su navegador. Para conocer información más detallada sobre la gestión de cookies con navegadores web específicos, puede encontrarla en las respectivas páginas web de los navegadores.'
    ]
  },
  {
    title: 'Derechos de protección de datos',
    paragraphs: [
      'Queremos asegurarnos de que conoce todos sus derechos en materia de protección de datos. Todo usuario tiene derecho a lo siguiente:'
    ],
    list: [
      'Derecho de acceso - Tiene derecho a solicitar copias de sus datos personales. Es posible que le cobremos una pequeña cantidad por este servicio.',
      'Derecho de rectificación - Tiene derecho a solicitar que corrijamos cualquier información que considere inexacta. También tiene derecho a solicitar que completemos la información que considere incompleta.',
      'Derecho de supresión - Tiene derecho a solicitar que borremos sus datos personales, en determinadas condiciones.',
      'Derecho a restringir el tratamiento - Tiene derecho a solicitar que restrinjamos el tratamiento de sus datos personales, en determinadas condiciones.',
      'Derecho a oponerse al tratamiento - Usted tiene derecho a oponerse al tratamiento de sus datos personales por nuestra parte, en determinadas condiciones.',
      'Derecho a la portabilidad de los datos - Tiene derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización, o directamente a usted, en determinadas condiciones.',
      'Si realiza una solicitud, disponemos de un mes para responderle. Si desea ejercer alguno de estos derechos, póngase en contacto con nosotros.'
    ]
  },
  {
    title: 'Información sobre menores',
    paragraphs: [
      'Otra parte de nuestra prioridad es añadir protección para los niños mientras usan internet. Animamos a padres y tutores a que observen, participen y/o supervisen y guíen su actividad en línea.',
      'PointWall no recopila a sabiendas ningún tipo de información personal identificable de niños menores de 13 años. Si cree que su hijo ha proporcionado este tipo de información en nuestro sitio web, le recomendamos encarecidamente que se ponga en contacto con nosotros inmediatamente y haremos todo lo posible por eliminar rápidamente dicha información de nuestros registros.'
    ]
  }
]

export default function Page (): JSX.Element {
  return (
    <>
      <Head>
        <title>Política de Privacidad</title>
      </Head>
      <Layout color='yellow'>
        <div className='mx-4'>
          <section className='max-w-prose mx-auto my-8'>
            <h1 className='text-2xl md:text-4xl'>Política de Privacidad PointWall</h1>
            {CONTENT.map((section, i) => (
              <div key={i} className='my-8'>
                {section.title !== undefined ? <h3 className='text-xl md:text-3xl mb-4'>{section.title}</h3> : null}
                {section.paragraphs.map((p, i) => (
                  <p key={i} className='text-sm md:text-base'>
                    {p}
                  </p>
                )
                )}
                {section.list !== undefined ? <ul className='mt-2 pl-6 space-y-2 list-decimal'>{section.list.map((item, i) => (<li key={i} className='text-sm md:text-base'>{item}</li>))}</ul> : null}
              </div>
            ))}

            <h3 className='text-xl md:text-3xl mb-4'>Cambios en la Política de Privacidad</h3>
            <p className='text-sm md:text-base'>
              Es posible que actualicemos nuestra Política de Privacidad de vez en cuando. Por ello, le aconsejamos que revise periódicamente esta página para comprobar si se han producido cambios. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Estos cambios entrarán en vigor inmediatamente después de su publicación en esta página.
            </p>

            <br />
            <h3 className='text-xl md:text-3xl mb-4'>Contáctenos</h3>
            <p className='text-sm md:text-base'>
              Si tiene alguna pregunta o sugerencia respecto a la Política de privacidad, no dude en contactarnos.
            </p>
          </section>
        </div>
      </Layout>
    </>
  )
}
