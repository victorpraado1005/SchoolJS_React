import PropTypes from 'prop-types'

import { Container } from './styles';

export default function HeaderContent({ headerContentLabel }) {
    return(
        <Container>
            {headerContentLabel}
        </Container>
    );
}

HeaderContent.propTypes = {
    headerContentLabel: PropTypes.string.isRequired,
}
