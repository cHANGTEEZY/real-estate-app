import { Link as RouterLink, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
    };

    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }} separator={<ChevronRight size={16} />}>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return index === pathnames.length - 1 ? (
                    <Typography
                        key={to}
                        color="textPrimary"
                        sx={{
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "1rem"
                        }}
                    >
                        {capitalize(value)}
                    </Typography>
                ) : (
                    <Link
                        component={RouterLink}
                        to={to}
                        key={to}
                        underline="none"
                        sx={{
                            color: "grey",
                            textDecoration: "none",
                            fontWeight: "semiBold",
                            fontSize: "1rem",
                            '&:hover': {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        {capitalize(value)}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default Breadcrumb;
