module TemplateTest where

import Data.List
import Test.HUnit
import Template

main = do runTestTT tests

tests = TestList [ do_it_7]

do_it_7 = test ["do_it for 7" ~: 8 ~=? do_it 7 ]

