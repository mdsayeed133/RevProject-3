package com.revature.Service;

import com.revature.services.ProfanityService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

@ExtendWith(MockitoExtension.class)
public class ProfanityServiceTest {
    @InjectMocks
    private ProfanityService profanityService;

    @Test
    void filterProfanityTest(){
        String testString= "FuCk and CuM or bitCh FuCk and CuM or bitCh FuCk and CuM or bitCh";
        String expectedString= "**** and *** or ***** **** and *** or ***** **** and *** or *****";

        String result = profanityService.filterProfanity(testString);

        assertThat(result, equalTo(expectedString));
    }
}
