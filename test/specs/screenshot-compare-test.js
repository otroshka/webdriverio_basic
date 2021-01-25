describe('Home page visual check', () => {

    it('Open Product page', () => {

        browser.url('https://www.genertel.it/');
        const title = browser.getTitle();
        expect(browser).toHaveTitle(title, 'Assicurazioni online: Auto, Moto, Casa, Vita | Genertel');
    });

    it('should save some screenshots', () => {

      // Save a screen
        browser.saveScreen('GeneraliPage', {
        disableCSSAnimation: true,
        hideScrollBars: true,
      });

      // Save a full page screenshot
      browser.saveFullPageScreen('Generali_FullScreen', {
        fullPageScrollTimeout: 3000
      });

      // Save a full page screenshot with all tab executions
      browser.saveTabbablePage('GeneraliPage-tabbable', { 
      /* some options, use the same options as for saveFullPageScreen */ 
      });
    });

    it('should compare successful with a baseline', () => {
      // Check a screen
      expect(browser.checkScreen('GeneraliPage', {
        blockOut: [ {
            height: 10, 
            width: 5, 
            x: 40, 
            y: 65
          },{
            height: 250, 
            width: 500,
            x: 0,
            y: 35
          },
        ],
        
        ignoreAlpha: true,
        blockOutStatusBar: true,
        //returnAllCompareData: true
      })).toEqual(0);
    });

    it('should compare successful with a baseline', () => {
        // Check a full page screenshot
      expect(browser.checkFullPageScreen('Generali_FullScreen', {
        // ignoreColors: false,
        // //saveAboveTolerance: 0.1,
        // scaleImagesToSameSize: true,
        // //returnAllCompareData: true
        })).toEqual(0);
    });

    it('Check a full page screenshot with all tab executions', () => {
      // Check a full page screenshot
      expect(browser.checkTabbablePage('GeneraliPage-tabbable', { 
        /* some options, use the same options as for checkFullPageScreen */ 
      })).toEqual(0);
    });
  });