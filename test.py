from whiteboard import high_and_low
from unittest

class TestHighAndLow(unittest.TestCase):

    def test_basic(self):
        self.assertEqual(high_and_low("1 2 3 4 5"), "5 1")
        self.assertEqual(high_and_low("1 2 -3 4 5"), "5 -3")
        self.assertEqual(high_and_low("1 9 3 4 -5"), "9 -5")

    def test_single_number(self):
        self.assertEqual(high_and_low("42"), "42 42")
        self.assertEqual(high_and_low("-42"), "-42 -42")

    def test_negative_numbers(self):
        self.assertEqual(high_and_low("-1 -2 -3 -4 -5"), "-1 -5")
        self.assertEqual(high_and_low("-5 -4 -3 -2 -1"), "-1 -5")

    def test_mixed_numbers(self):
        self.assertEqual(high_and_low("1 2 3 -4 -5"), "3 -5")
        self.assertEqual(high_and_low("0 -1 2 -3 4"), "4 -3")

if __name__ == "__main__":
    unittest.main()