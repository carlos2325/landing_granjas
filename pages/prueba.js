const prueba = (props) => {
    console.log(props)
    return (
        <div>
            
        </div>
    )
}

export default prueba

export async function getServerSideProps(context) {
    // const {data:total} = await api.totalDonations()
    // const {data:donations} = await api.fetchDonations()
    // const {data:signatures} = await api.fetchSignatures()
    // const {data:totalSignatures} = await api.totalSignatures()
    // donations, total, signatures, totalSignatures
    const hola = process.env.BASE_URL
    return {
      props: {hola}, // will be passed to the page component as props
    }
  }