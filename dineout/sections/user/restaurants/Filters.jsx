//
import { Box, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import Accordtion from './Accordion';
// store
import { useGetCuisinesQuery, useGetTagsQuery, useGetTypesQuery } from '@/store/api/restaurant';
import { useEffect, useState } from 'react';


const SearchField = ({ searchQuery, onChange }) => {
    return (
        <TextField
            label='Search'
            fullWidth
            size='small'
            margin='none'
            sx={{ mb: 2 }}
            type='search'
            value={searchQuery}
            onChange={onChange}
        />
    );
}

const CuisineDetails = ({selectedFilters, setSelectedFilters}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data } = useGetCuisinesQuery();

    const onChange = ({ target: { value } }) => {
        setSearchQuery(value);
    }
    
    const onSelect = (item) => {
        if (selectedFilters?.cuisines !== item) {
            setSelectedFilters(prev => ({...prev, cuisines: item}));
        } else {
            setSelectedFilters(prev => ({...prev, cuisines: ''}));
        }
    }

    const filteredData = data?.filter(item => item?.name.toLowerCase().includes(searchQuery));

    return (
        <Box>
            <SearchField
                searchQuery={searchQuery}
                onChange={onChange}
            />

            {filteredData?.map(cuisine => (
                <Typography
                    gutterBottom
                    key={cuisine?.id}
                    sx={{
                        opacity: selectedFilters?.cuisines === cuisine ? 0.8 : 0.5,
                        cursor: 'pointer'
                    }}
                    onClick={() => onSelect(cuisine?.name)}
                >{cuisine?.name}</Typography>
            ))}
        </Box>
    );
};

const TagDetails = ({setSelectedFilters}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const { data } = useGetTagsQuery();

    const onChange = ({ target: { value } }) => {
        setSearchQuery(value);
    }

    const onSelect = (event) => {
        const { value } = event.target;
        const updatedCheckboxes = [...selectedItems];

        if (updatedCheckboxes.includes(value)) {
            // Deselect the checkbox
            const index = updatedCheckboxes.indexOf(value);
            updatedCheckboxes.splice(index, 1);
        } else {
            // Select the checkbox
            updatedCheckboxes.push(value);
        }

        setSelectedItems(updatedCheckboxes);
    }
    
    useEffect(() => {
        const queryString = selectedItems.map((item) => `tags=${encodeURIComponent(item)}`).join('&');
    
        setSelectedFilters(prev => ({
            ...prev,
            tags: `&${queryString}`,
        }));
    }, [selectedItems]);

    const filteredData = data?.filter(item => item?.name.toLowerCase().includes(searchQuery));

    return (
        <Box>
            <SearchField
                searchQuery={searchQuery}
                onChange={onChange}
            />

            <Grid container>
                {filteredData?.map(cuisine => (
                    <Grid item xs={12}>
                        <FormControlLabel
                            gutterBottom
                            key={cuisine?.id}
                            control={
                                <Checkbox
                                    size='small'
                                    checked={selectedItems.includes(cuisine?.name)}
                                    onChange={onSelect}
                                    value={cuisine?.name}
                                />
                            }
                            label={cuisine?.name}
                            sx={{
                                fontSize: '13px',
                                opacity: 0.5,
                                cursor: 'pointer'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const TypeDetails = ({setSelectedFilters}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const { data } = useGetTypesQuery();

    const onChange = ({ target: { value } }) => {
        setSearchQuery(value);
    }

    const onSelect = () => {
        const { value } = event.target;
        const updatedCheckboxes = [...selectedItems];

        if (updatedCheckboxes.includes(value)) {
            // Deselect the checkbox
            const index = updatedCheckboxes.indexOf(value);
            updatedCheckboxes.splice(index, 1);
        } else {
            // Select the checkbox
            updatedCheckboxes.push(value);
        }

        setSelectedItems(updatedCheckboxes);
    }

    useEffect(() => {
        const queryString = selectedItems.map((item) => `types=${encodeURIComponent(item)}`).join('&');
    
        setSelectedFilters(prev => ({
            ...prev,
            types: `&${queryString}`,
        }));
    }, [selectedItems]);

    const filteredData = data?.filter(item => item?.name.toLowerCase().includes(searchQuery));

    return (
        <Box>
            <SearchField
                searchQuery={searchQuery}
                onChange={onChange}
            />

            <Grid container>

                {filteredData?.map(type => (
                    <Grid item xs={12}>
                        <FormControlLabel
                            gutterBottom
                            key={type?.id}
                            control={
                                <Checkbox
                                    size='small'
                                    checked={selectedItems.includes(type?.name)}
                                    onChange={onSelect}
                                    value={type?.name}
                                />
                            }
                            label={type?.name}
                            sx={{
                                fontSize: '13px',
                                opacity: 0.5,
                                cursor: 'pointer'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

const Filters = ({selectedFilters, setSelectedFilters}) => {
    return (
        <Box>
            <Accordtion
                summary="Cuisines"
                details={<CuisineDetails selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>}
            />
            <Accordtion
                summary="Tags"
                details={<TagDetails selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>}
            />
            <Accordtion
                summary="Types"
                details={<TypeDetails selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>}
            />
        </Box>
    );
};

export default Filters;
