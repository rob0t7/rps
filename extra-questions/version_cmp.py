#!/usr/bin/env python
import unittest

## The algorithm for this is pretty simple.  The 1st step is parse the
## two strings into lists of strings that are seperated by '.'.  Next
## we need to calculate then length of each array b/c it will be used
## in the main loop of the function.  Then we compare each member of
## the two lists one by one until we find the ordering of the two strings.

def compare_two_version_strings(version1, version2):
    """
    A function that orders two version strings. A version string contains a
    period-separated list of numbers or strings.

    For example:
    >>> compare_two_version_strings("1.2.a", "1.2.2")
    ('1.2.2', '1.2.a')

    """
    _version1 = version1.split('.')
    _version2 = version2.split('.')
    version1_len = len(_version1)
    version2_len = len(_version2)
    upper_bound = version1_len if version1_len < version2_len else version2_len
    for i in range(0, upper_bound):
        if _version1[i] > _version2[i]:
            return version2,version1

    # Check to make sure that the case where the pair('1.0.0', '1.0')
    # should be ordered as ('1.0', '1.0.0')
    if version1_len > version2_len and _version1[upper_bound-1] == _version2[upper_bound-1]:
        return version2,version1
    return version1,version2


class CompareTwoVersionsTestCase(unittest.TestCase):
    def test_proper_sorting_of_two_version_strings(self):
        tests = (
            {'input': ("1.3.2", '1.2.4'), 'expected': ('1.2.4', '1.3.2')},
            {'input': ('2.3', '2.4'), 'expected': ('2.3', '2.4')},
            {'input': ('1.1', '2.1'), 'expected': ('1.1', '2.1')},
            {'input': ('10.a.5', '9.b.10'), 'expected': ('9.b.10', '10.a.5')},
            {'input': ('1.a', '1.b'), 'expected': ('1.a', '1.b')},
            )
        for test in tests:
            self.assertEquals(
                compare_two_version_strings(test['input'][0], test['input'][1]),
                test['expected']
            )

    def test_proper_sorting_with_two_string_with_different_lengths(self):
        tests = (
            {'input': ('1.0.0', '1.0'), 'expected': ('1.0', '1.0.0')},
            {'input': ('1.0.1', '1.1'), 'expected': ('1.0.1', '1.1')},
            {'input': ('1.1', '1.0.1'), 'expected': ('1.0.1', '1.1')}
        )
        for test in tests:
            self.assertEquals(
                compare_two_version_strings(test['input'][0], test['input'][1]),
                test['expected']
            )


if __name__ == '__main__':
    unittest.main()
