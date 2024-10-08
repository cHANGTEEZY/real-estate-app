import Breadcrumb from '../../components/ui/BreadCrumb/BreadCrumb'
import Header from '../../components/Header/Header'

export default function PrivacyAndSharing({ isAuthenticated, setIsAuthenticated }) {
    return (
        <>

            <Header showPropertyOptions={false} showSearch={false} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Breadcrumb />
        </>
    )
}
