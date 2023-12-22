import {
    SearchbarHeader,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
    return (
        <>
            <SearchbarHeader class="searchbar">
                <SearchForm class="form">
                    <SearchFormButton type="submit" class="button">
                        <SearchFormButtonLabel class="button-label">
                            Search
                        </SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchbarHeader>
        </>
    );
};
