from password_strength import PasswordStats


def get_password_policy_errors(password):
    """
    Function for validating password policy
    """
    stats = PasswordStats(password)
    errors = []
    if stats.letters_uppercase < 2:
        errors.append(
            "password should have at least 2 uppercase letters"
        )

    if stats.letters_lowercase < 3:
        errors.append(
            "password should have at least 3 lowercase letters"
        )

    if stats.numbers < 2:
        errors.append(
            "password should have at least 2 digits"
        )

    if stats.special_characters < 1:
        errors.append(
            "password should have at least 1 special character"
        )

    get_repeating_password(stats, errors)
    return errors


def get_repeating_password(stats, errors):
    """
    Check repeating sequence and patterns
    """
    if stats.sequences_length > 2:
        errors.append(
            "password should not have a repeating sequence"
        )
    if stats.repeated_patterns_length > 2:
        errors.append(
            "password should not have a repeating patterns"
        )