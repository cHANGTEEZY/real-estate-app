import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/ui/BreadCrumb/BreadCrumb'

export default function Hosting({ isAuthenticated, setIsAuthenticated }) {
    return (
        <>
            <Header showPropertyOptions={false} showSearch={false} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Breadcrumb />
        </>
    )
}
